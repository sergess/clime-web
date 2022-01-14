import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import {
  HourlyDetailedForecastCard,
  DailyForecastCard,
  PromoBanner,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';
import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

import { ForecastCard } from 'common/types';

import {
  withForecastCards,
  withLocationData,
  withTranslations,
  mapHourlyDetailedCard,
  mapDailyCard,
} from 'server/middlewares/get-server-side-props';

const HourlyWeather = memo((): ReactElement => {
  const locationData = useLocationData();

  const locationName = getLocationName(locationData);

  const { t } = useTranslation('meta-tags');
  return (
    <>
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
      <PromoBanner spotId="hourlyOne" />
      <DailyForecastCard maxH={270} w="full" />
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
    </>
  );
});

HourlyWeather.displayName = 'HourlyWeather';

export default HourlyWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [locationData, translations] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations(
      'hourly-detailed-forecast-card',
      'daily-forecast-card',
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
      ...translations,
    },
  };
};
