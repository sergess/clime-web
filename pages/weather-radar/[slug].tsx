import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import {
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

const WeatherRadar = (): ReactElement => <p>Weather radar</p>;

export default WeatherRadar;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locationData = await withLocationData({ autolocation: false })(context);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const withWeatherRadarTranslations = withTranslations();

  return {
    props: {
      locationData,

      ...(await withWeatherRadarTranslations(context)),
    },
  };
};
