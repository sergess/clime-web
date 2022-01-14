import React, { FC, ReactElement, memo } from 'react';
import { GetServerSideProps } from 'next';
import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
  PromoBanner,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';
import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

import { ForecastCards } from 'common/types/forecast-cards.type';
import { ForecastCard } from 'common/types/forecast-card.type';

import {
  withForecastCards,
  withTranslations,
  withLocationData,
  mapTodayCard,
  mapHourlyCard,
  mapSummaryCard,
  mapDailyCard,
} from 'server/middlewares/get-server-side-props';

const WeatherToday: FC<{ forecastCards: ForecastCards }> = memo(
  ({ forecastCards }): ReactElement => {
    const locationData = useLocationData();
    const locationName = getLocationName(locationData);

    const { t } = useTranslation(['meta-tags', 'today-card']);

    return (
      <ForecastCardsProvider value={forecastCards}>
        <Head>
          <title>
            {t("{{locationName}} - Today's Weather Forecast | Clime", {
              locationName,
            })}
          </title>
          <meta
            name="description"
            content={t(
              "See today's weather for {{locationName}}: temps, chance & amount of precipitation, wind speed & direction, UV index & more.",
              { locationName }
            )}
          />
        </Head>
        <TodayCard
          heading={
            <Heading
              as="h1"
              color="gray.500"
              fontSize="16px"
              fontWeight="500"
              lineHeight="16px"
            >
              {t('Today Weather')}
            </Heading>
          }
          w="full"
        />
        <PromoBanner spotId="todayOne" />
        <HourlyForecastCard w="full" />
        <Card
          w="full"
          h="100px"
          bg="gray.400"
          color="white"
          justifyContent="center"
        >
          ADS
        </Card>
        <SummaryCard w="full" h={{ base: 260, md: 270 }} />
        <DailyForecastCard maxH={270} w="full" />
        <PromoBanner spotId="todayTwo" />
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

WeatherToday.displayName = 'WeatherToday';

export default WeatherToday;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [locationData, translations] = await Promise.all([
    withLocationData({ autolocation: false })(context),
    withTranslations(
      'today-card',
      'hourly-forecast-card',
      'summary-card',
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
      [ForecastCard.TODAY]: mapTodayCard,
      [ForecastCard.HOURLY]: mapHourlyCard,
      [ForecastCard.SUMMARY]: mapSummaryCard,
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
