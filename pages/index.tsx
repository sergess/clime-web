import React, { FC, ReactElement, useEffect, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
  PromoBanner,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';
import { WEATHER_TODAY } from 'client/constants';
import {
  useHasMounted,
  useCookies,
  useLocationFromBrowser,
  useLocationDataByCoordinates,
} from 'client/hooks';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';
import { ForecastCards } from 'common/types/forecast-cards.type';
import { ForecastCard } from 'common/types/forecast-card.type';

import {
  mapDailyCard,
  mapHourlyCard,
  mapSummaryCard,
  mapTodayCard,
  withForecastCards,
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

const Index: FC<{ forecastCards: ForecastCards }> = memo(
  ({ forecastCards }): ReactElement => {
    const router = useRouter();
    const { cookies, setCookie } = useCookies([
      EXACT_LATITUDE_COOKIE,
      EXACT_LONGITUDE_COOKIE,
    ]);
    const [latitudeCookie, longitudeCookie] = cookies as (string | undefined)[];
    const locationFromBrowser = useLocationFromBrowser({
      skip: !!latitudeCookie && !!longitudeCookie,
    });
    const { data: exactLocationData } =
      useLocationDataByCoordinates(locationFromBrowser);
    const hasMounted = useHasMounted();

    useEffect(() => {
      if (
        hasMounted &&
        exactLocationData &&
        !latitudeCookie &&
        !longitudeCookie
      ) {
        const { slug } = exactLocationData;

        setCookie(EXACT_LATITUDE_COOKIE, `${locationFromBrowser?.latitude}`);
        setCookie(EXACT_LONGITUDE_COOKIE, `${locationFromBrowser?.longitude}`);

        router.push(`${WEATHER_TODAY}/${slug}`);
      }
    }, [
      hasMounted,
      exactLocationData,
      locationFromBrowser,
      latitudeCookie,
      longitudeCookie,
    ]);
    const { t } = useTranslation('meta-tags');

    return (
      <ForecastCardsProvider value={forecastCards}>
        <Head>
          <title>{t('Local & World Weather Forecast and Radar | Clime')}</title>
          <meta
            name="description"
            content={t(
              'Prepare for weather surprises with Clime! Check current weather in multiple locations, get precise 10-day forecasts, and explore the weather radar map.'
            )}
          />
        </Head>
        <TodayCard w="full" />
        <PromoBanner spotId="homeOne" />
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
        <PromoBanner spotId="homeTwo" />
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

Index.displayName = 'Index';

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [locationData, translations] = await Promise.all([
    withLocationData({ autolocation: true })(context),
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
