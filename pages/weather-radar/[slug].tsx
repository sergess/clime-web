import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

import {
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';
import { RemoteConfig } from 'server/services/remote-config.service';

const WeatherRadar = (): ReactElement => {
  const locationData = useLocationData();

  const locationName = getLocationName(locationData);

  const { t } = useTranslation('meta-tags');
  return (
    <>
      <Head>
        <title>
          {t('{{locationName}} - Weather Radar | Clime', { locationName })}
        </title>
        <meta
          name="description"
          content={t(
            'View the local weather radar map to see detected precipitation for {{locationName}}.',
            { locationName }
          )}
        />
      </Head>
      <p>Weather radar</p>
    </>
  );
};

export default WeatherRadar;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { notFound: true };

  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations('meta-tags')(context),
    remoteConfig.getAppConfig(),
  ]);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locationData,
      appConfig,
      ...translations,
    },
  };
};
