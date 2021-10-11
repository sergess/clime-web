import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';

import {
  withForecastFeed,
  withApiV3Service,
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
  const forecastFeed = await withForecastFeed(context);
  const { locale } = context;

  const geocodeService = withApiV3Service<Geocode>(context, Geocode);

  const { countryCode, city, forecastZoneId } = context.query;
  // [TODO] add checks for undefined, error handling
  // [TODO] Add api route for geocodeService.getLocationDataByLocation
  const locationData = await geocodeService.getLocationDataByLocation({
    countryCode: countryCode as string,
    city: city as string,
    forecastZoneId: forecastZoneId as string,
  });

  return {
    props: {
      initialState: {
        forecastFeed,
        locationData,
      },

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
