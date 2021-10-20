import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';
import { WeatherTodayPageProps } from 'client/types';

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
    <TodayCard data={todayCardData} />
    <HourlyForecastCard data={hourlyForecastCardData} />
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
