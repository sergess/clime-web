import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';
import dynamic from 'next/dynamic';
import { Skeleton } from '@chakra-ui/react';

import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

import { WeatherRadarPageLayout } from 'client/design-system/templates';

import {
  withLocationData,
  withTranslations,
  withBreadcrumbs,
} from 'server/middlewares/get-server-side-props';
import { RemoteConfig } from 'server/services/remote-config.service';
import { PromoBanner } from 'client/design-system/organisms';
import { mapFullscreenOnAtom } from 'client/state/atoms';
import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const Radar = dynamic(
  () => import('client/design-system/organisms/radar.organism'),
  {
    ssr: false,
    loading: () => <Skeleton h="full" w="full" />,
  }
);

const WeatherRadar = (): ReactElement => {
  const { t } = useTranslation('meta-tags');

  const locationData = useLocationData();
  const locationName = getLocationName(locationData);
  const mapFullscreenOn = useAtomValue(mapFullscreenOnAtom);

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
      <Radar />
      <PromoBanner
        mx={mapFullscreenOn ? LAYOUT_HORIZONTAL_PADDING : '0'}
        spotId="radarOne"
        className="banner__radar-one"
        my={5}
        display={{ base: 'block', md: 'none' }}
      />
    </>
  );
};

WeatherRadar.Layout = WeatherRadarPageLayout;

export default WeatherRadar;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations('meta-tags', 'radar')(context),
    remoteConfig.getAppConfig(),
  ]);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const breadcrumbs = await withBreadcrumbs(context, locationData);

  return {
    props: {
      locationData,
      appConfig,
      breadcrumbs,
      ...translations,
    },
  };
};
