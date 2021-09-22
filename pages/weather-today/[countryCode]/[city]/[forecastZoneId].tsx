import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard } from 'client/design-system/organisms';

import { withForecastFeed } from 'server/middlewares/get-server-side-props';

const WeatherToday = (): ReactElement => {
  const { data, error } = useSWR(
    `/api/feed/forecast?forecastZoneId=1&language=en`
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <TodayCard />;
};

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
          'today-card',
          'footer',
          'header',
        ]))),
    },
  };
};
