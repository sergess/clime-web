import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import { ForecastCard } from 'common/types';

import {
  withForecastCards,
  withTranslations,
  withLocationData,
  mapTodayCard,
  mapHourlyCard,
  mapSummaryCard,
  mapDailyCard,
} from 'server/middlewares/get-server-side-props';

const WeatherToday = memo(
  (): ReactElement => (
    <>
      <TodayCard w="full" />
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        APP PROMO BANNER
      </Card>
      <HourlyForecastCard w="full" />
      <Card
        w="full"
        h="100px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        ADS
      </Card>
      <SummaryCard w="full" h={{ base: 240, md: 254 }} />
      <DailyForecastCard maxH={270} w="full" />
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

WeatherToday.displayName = 'WeatherToday';

export default WeatherToday;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locationData = await withLocationData({ autolocation: false })(context);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const forecastCards = await withForecastCards(
    {
      [ForecastCard.TODAY]: mapTodayCard,
      [ForecastCard.HOURLY]: mapHourlyCard,
      [ForecastCard.SUMMARY]: mapSummaryCard,
      [ForecastCard.DAILY]: mapDailyCard,
    },
    locationData
  )(context);

  if (!forecastCards) {
    return {
      notFound: true,
    };
  }

  const withWeatherTodayTranslations = withTranslations(
    'today-card',
    'hourly-forecast-card',
    'summary-card',
    'daily-forecast-card'
  );

  return {
    props: {
      locationData,
      forecastCards,

      ...(await withWeatherTodayTranslations(context)),
    },
  };
};
