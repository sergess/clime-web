import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard } from 'client/design-system/organisms';

import { withForecastFeed } from 'server/middlewares/get-server-side-props';

const WeatherToday = (): ReactElement => <TodayCard />;

export default WeatherToday;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const forecastFeed = await withForecastFeed(context);
  const { locale } = context;

  return {
    props: {
      initialState: {
        forecastFeed,
      },

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
