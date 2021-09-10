import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import { withForecastFeed } from 'src/middlewares/get-server-side-props';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WeatherToday = (): ReactElement => {
  const { data, error } = useSWR(
    `/api/feed/forecast?forecastZoneId=1&language=en`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Weather today</div>;
};

export default WeatherToday;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const forecastFeed = await withForecastFeed(context);

  return {
    props: {
      forecastFeed,
    },
  };
};
