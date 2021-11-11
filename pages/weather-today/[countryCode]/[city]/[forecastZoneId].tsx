import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import {
  withForecastFeed,
  withApiV3Service,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';

import {
  withTodayCard,
  withSummaryCard,
  withHourlyForecastCard,
  withDailyForecastCard,
} from 'server/middlewares/data-mapper';

import { Geocode } from 'server/services';

const WeatherToday = memo(
  (): ReactElement => (
    <>
      <TodayCard w="full" />
      <Card w="full" h="100px">
        Block 1
      </Card>
      <HourlyForecastCard w="full" />
      <SummaryCard w="full" h={{ base: 240, md: 254 }} />
      <DailyForecastCard maxH={270} w="full" />
      <Card w="full">Block 3</Card>
    </>
  )
);

WeatherToday.displayName = 'WeatherToday';

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

  if (!forecastFeed) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cards: {
        today: withTodayCard(forecastFeed, locationData),
        hourlyForecast: withHourlyForecastCard(forecastFeed, locationData),
        summary: withSummaryCard(forecastFeed),
        dailyForecast: withDailyForecastCard(forecastFeed, locationData),
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'today-card',
          'hourly-forecast-card',
          'summary-card',
          'daily-forecast-card',
        ]))),
    },
  };
};
