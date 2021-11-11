import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DailyDetailedForecastCard } from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import {
  withForecastFeed,
  withApiV3Service,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';
import { withDailyDetailedForecastCard } from 'server/middlewares/data-mapper';
import { Geocode } from 'server/services';

const TenDayWeather = memo(
  (): ReactElement => (
    <>
      <DailyDetailedForecastCard w="full" />
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        APP PROMO BANNER
      </Card>
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

TenDayWeather.displayName = 'TenDayWeather';

export default TenDayWeather;

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
        dailyDetailedForecast: withDailyDetailedForecastCard(
          forecastFeed,
          locationData
        ),
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'daily-detailed-forecast-card',
        ]))),
    },
  };
};
