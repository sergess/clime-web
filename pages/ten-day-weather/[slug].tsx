import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import {
  DailyDetailedForecastCard,
  PromoBanner,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import { ForecastCard } from 'common/types';

import {
  mapDailyDetailedCard,
  withForecastCards,
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

const TenDayWeather = memo(
  (): ReactElement => (
    <>
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
    </>
  )
);

TenDayWeather.displayName = 'TenDayWeather';

export default TenDayWeather;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [locationData, translations] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations('daily-detailed-forecast-card', 'banners')(context),
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
