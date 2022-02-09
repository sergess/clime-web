import React, { FC, ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  HourlyDetailedForecastCard,
  DailyForecastCard,
  PromoBanner,
  AdsenseBanner,
  RadarSnapshotStub,
} from 'client/design-system/organisms';
import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';
import { CLIENT_ID } from 'client/constants';

import { ForecastCards, ForecastCard } from 'common/types';

import {
  withForecastCards,
  withLocationData,
  withTranslations,
  mapHourlyDetailedCard,
  mapDailyCard,
} from 'server/middlewares/get-server-side-props';
import { RemoteConfig } from 'server/services/remote-config.service';

const HourlyWeather: FC<{ forecastCards: ForecastCards }> = memo(
  ({ forecastCards }): ReactElement => {
    const locationData = useLocationData();
    const locationName = getLocationName(locationData);

    const { t } = useTranslation('meta-tags');

    return (
      <ForecastCardsProvider value={forecastCards}>
        <Head>
          <title>
            {t('{{locationName}} - Hourly Weather Forecast | Clime', {
              locationName,
            })}
          </title>
          <meta
            name="description"
            content={t(
              'Hourly weather forecast for {{locationName}}: temps, chance & amount of precip, wind speed & direction, humidity, & UV index.',
              { locationName }
            )}
          />
        </Head>
        <HourlyDetailedForecastCard w="full" />
        <RadarSnapshotStub
          h="full"
          minH="270px"
          display={{ base: 'none', md: 'flex' }}
        />
        <PromoBanner spotId="hourlyOne" priorityLoad />
        <DailyForecastCard maxH={270} w="full" />
        <AdsenseBanner
          client={CLIENT_ID}
          slot="7916559712"
          w="full"
          h="100px"
        />
      </ForecastCardsProvider>
    );
  }
);

HourlyWeather.displayName = 'HourlyWeather';

export default HourlyWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations(
      'hourly-detailed-forecast-card',
      'daily-forecast-card',
      'banners',
      'meta-tags'
    )(context),
    remoteConfig.getAppConfig(),
  ]);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const forecastCards = await withForecastCards(
    {
      [ForecastCard.HOURLY_DETAILED]: mapHourlyDetailedCard,
      [ForecastCard.DAILY]: mapDailyCard,
    },
    locationData
  )(context);

  if (!forecastCards) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locationData,
      forecastCards,
      appConfig,
      ...translations,
    },
  };
};
