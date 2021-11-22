import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import {
  HourlyDetailedForecastCard,
  DailyForecastCard,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import { ForecastCard } from 'common/types';

import {
  withForecastCards,
  withLocationData,
  withTranslations,
  mapHourlyDetailedCard,
  mapDailyCard,
} from 'server/middlewares/get-server-side-props';

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
  const locationData = await withLocationData({ autolocation: false })(context);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const forecastCards = await withForecastCards(
    {
      [ForecastCard.HOURLY_DETAILED]: mapHourlyDetailedCard,
      [ForecastCard.DAILY]: mapDailyCard,
    },
    locationData
  )(context);

  if (!forecastCards) {
    return {
      notFound: true,
    };
  }

  const withHourlyWeatherTranslations = withTranslations(
    'hourly-detailed-forecast-card',
    'daily-forecast-card'
  );

  return {
    props: {
      locationData,
      forecastCards,

      ...(await withHourlyWeatherTranslations(context)),
    },
  };
};
