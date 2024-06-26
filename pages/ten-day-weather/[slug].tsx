import React, { FC, ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  AdsenseBanner,
  DailyDetailedForecastCard,
  HourlyForecastCard,
  PromoBanner,
  RadarSnapshotStub,
} from 'client/design-system/organisms';
import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';
import { CLIENT_ID } from 'client/constants';

import { ForecastCards, ForecastCard } from 'common/types';

import {
  mapDailyDetailedCard,
  withForecastCards,
  withLocationData,
  withTranslations,
  mapHourlyCard,
} from 'server/middlewares/get-server-side-props';
import { RemoteConfig } from 'server/services/remote-config.service';

const TenDayWeather: FC<{ forecastCards: ForecastCards }> = memo(
  ({ forecastCards }): ReactElement => {
    const locationData = useLocationData();
    const locationName = getLocationName(locationData);

    const { t } = useTranslation('meta-tags');

    return (
      <ForecastCardsProvider value={forecastCards}>
        <Head>
          <title>
            {t('{{locationName}} - 10-Day Weather Forecast | Clime', {
              locationName,
            })}
          </title>
          <meta
            name="description"
            content={t(
              'Long-range weather forecast for {{locationName}}: temps, chance & amount of precipitation, pressure, humidity, UV index, & dew point.',
              { locationName }
            )}
          />
        </Head>
        <DailyDetailedForecastCard w="full" />
        <RadarSnapshotStub
          h="full"
          minH="270px"
          className="radar-snapshot__tenday"
          order={{ base: 1, md: 0 }}
        />
        <PromoBanner
          spotId="tenDayOne"
          priorityLoad
          className="banner__tenday-one"
        />
        <HourlyForecastCard w="full" className="hourly-block__tenday" />
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

TenDayWeather.displayName = 'TenDayWeather';

export default TenDayWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations(
      'daily-detailed-forecast-card',
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
      [ForecastCard.DAILY_DETAILED]: mapDailyDetailedCard,
      [ForecastCard.HOURLY]: mapHourlyCard,
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
