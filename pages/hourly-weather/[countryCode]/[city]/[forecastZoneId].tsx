import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  HourlyDetailedForecastCard,
  DailyForecastCard,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import {
  withForecastFeed,
  withApiV3Service,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';
import {
  withHourlyDetailedForecastCard,
  withDailyForecastCard,
} from 'server/middlewares/data-mapper';
import { Geocode } from 'server/services';

const HourlyWeather = memo(
  (): ReactElement => (
    <>
      <HourlyDetailedForecastCard w="full" />
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        APP PROMO BANNER
      </Card>
      <DailyForecastCard maxH={270} w="full" />
      <Card
        w="full"
        h="100px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        ADS
      </Card>
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        RADAR SNAPSHOT
      </Card>
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
        dailyForecast: withDailyForecastCard(forecastFeed, locationData),
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'hourly-detailed-forecast-card',
          'daily-forecast-card',
        ]))),
    },
  };
};
