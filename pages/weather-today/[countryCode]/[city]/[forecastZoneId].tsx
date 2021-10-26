import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';
import { WeatherTodayPageProps } from 'client/types';
import { Card } from 'client/design-system/atoms';
import { DefaultLayout } from 'client/design-system/templates';

import {
  withForecastFeed,
  withApiV3Service,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';
import {
  withTodayCard,
  withHourlyForecastCard,
} from 'server/middlewares/data-preparation';
import { Geocode } from 'server/services';

const WeatherToday = ({
  todayCardData,
  hourlyForecastCardData,
}: WeatherTodayPageProps): ReactElement => (
  <>
    <TodayCard data={todayCardData} pt="5" pb={{ md: 2 }} w="full" />
    <Card w="full" h="100px">
      Block 1
    </Card>
    <Card w="full">Block 3</Card>
    <Card h="260px" w="full">
      Block 4
    </Card>
    <HourlyForecastCard data={hourlyForecastCardData} py="5" w="full" />
  </>
);

export default WeatherToday;

WeatherToday.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

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
      todayCardData: withTodayCard(forecastFeed, locationData),
      hourlyForecastCardData: withHourlyForecastCard(
        forecastFeed,
        locationData
      ),
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
