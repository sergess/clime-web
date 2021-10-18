import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';

import {
  withForecastFeed,
  withApiV3Service,
  withUserAgentInfo,
} from 'server/middlewares/get-server-side-props';
import { Geocode } from 'server/services';

const WeatherToday = (): ReactElement => (
  <>
    <TodayCard />
    <HourlyForecastCard />
  </>
);

export default WeatherToday;

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

  return {
    props: {
      initialState: {
        forecastFeed,
        locationData,
        userAgentInfo: withUserAgentInfo(context),
      },

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
