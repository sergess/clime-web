import React, { ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';

import { DailyDetailedForecastCard } from 'client/design-system/organisms';
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
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        APP PROMO BANNER
      </Card>
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
  try {
    const locationData = await withLocationData({ autolocation: false })(
      context
    );

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

    const withTenDayWeatherTranslations = withTranslations(
      'daily-detailed-forecast-card'
    );

    return {
      props: {
        locationData,
        forecastCards,

        ...(await withTenDayWeatherTranslations(context)),
      },
    };
  } catch (error) {
    console.error('[ten-day-weather page]: ', error);

    return { notFound: true };
  }
};
