import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
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
      <Card w="full">Block 3</Card>
      <Card h="260px" w="full">
        Block 4
      </Card>
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
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
