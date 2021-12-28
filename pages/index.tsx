import React, { ReactElement, useEffect, memo } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

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
import { ForecastCard } from 'common/types';

import {
  mapDailyCard,
  mapHourlyCard,
  mapSummaryCard,
  mapTodayCard,
  withForecastCards,
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

const Index = memo((): ReactElement => {
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

  return (
    <>
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
      <SummaryCard w="full" h={{ base: 240, md: 254 }} />
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
    </>
  );
});

Index.displayName = 'Index';

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const [locationData, translations] = await Promise.all([
      withLocationData({ autolocation: true })(context),
      withTranslations(
        'today-card',
        'hourly-forecast-card',
        'summary-card',
        'daily-forecast-card',
        'banners'
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
  } catch (error) {
    console.error('[index page]: ', error);

    return { notFound: true };
  }
};
