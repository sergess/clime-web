import React, { FC, ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  DailyDetailedForecastCard,
  PromoBanner,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';
import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

import { ForecastCards } from 'common/types/forecast-cards.type';
import { ForecastCard } from 'common/types/forecast-card.type';

import {
  mapDailyDetailedCard,
  withForecastCards,
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

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
        <PromoBanner spotId="tenDayOne" />
        <Card
          w="full"
          h="100px"
          bg="gray.400"
          color="white"
          justifyContent="center"
        >
          ADS
        </Card>
        <Card
          w="full"
          h="200px"
          bg="gray.400"
          color="white"
          justifyContent="center"
        >
          RADAR SNAPSHOT
        </Card>
      </ForecastCardsProvider>
    );
  }
);

TenDayWeather.displayName = 'TenDayWeather';

export default TenDayWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [locationData, translations] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations(
      'daily-detailed-forecast-card',
      'banners',
      'meta-tags'
    )(context),
  ]);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const forecastCards = await withForecastCards(
    {
      [ForecastCard.DAILY_DETAILED]: mapDailyDetailedCard,
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
      ...translations,
    },
  };
};
