import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HourlyDetailedForecastCard } from 'client/design-system/organisms';

import {
  withForecastFeed,
  withApiV3Service,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';
import { withHourlyDetailedForecastCard } from 'server/middlewares/data-mapper';
import { Geocode } from 'server/services';

const HourlyWeather = memo(
  (): ReactElement => (
    <>
      <HourlyDetailedForecastCard w="full" />
    </>
  )
);

HourlyWeather.displayName = 'HourlyWeather';

export default HourlyWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, defaultLocale } = context;
  const { countryCode, city } = context.query;

  const geocodeService = withApiV3Service<Geocode>(context, Geocode);

  const forecastFeed = await withForecastFeed(context);
  const locationData = await geocodeService.getLocationDataByLocation({
    countryCode: countryCode as string,
    city: city as string,
    language: locale || (defaultLocale as string),
  });

  if (!forecastFeed) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cards: {
        hourlyDetailedForecast: withHourlyDetailedForecastCard(
          forecastFeed,
          locationData
        ),
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'hourly-weather-page',
        ]))),
    },
  };
};
