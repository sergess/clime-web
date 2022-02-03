import React, { FC, ReactElement, useEffect, memo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import {
  AdsenseBanner,
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
  PromoBanner,
  RadarSnapshotStub,
} from 'client/design-system/organisms';
import { CLIENT_ID, WEATHER_TODAY } from 'client/constants';
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
import { RemoteConfig } from 'server/services/remote-config.service';

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

        router.push(`/${WEATHER_TODAY}/${slug}`);
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
          <title>{t('Local & World Weather Forecast | Clime')}</title>
          <meta
            name="description"
            content={t(
              'Prepare for weather surprises with Clime! Check the local forecast for today, view the current weather in multiple locations, and get precise 10-day forecasts.'
            )}
          />
        </Head>
        <TodayCard w="full" />
        <RadarSnapshotStub
          h="full"
          minH="270px"
          display={{ base: 'none', md: 'flex' }}
        />
        <PromoBanner spotId="homeOne" priorityLoad />
        <HourlyForecastCard w="full" />
        <AdsenseBanner
          client={CLIENT_ID}
          slot="7916559712"
          w="full"
          h="100px"
        />
        <SummaryCard w="full" h={{ base: 260, md: 'auto' }} />
        <DailyForecastCard w="full" />
        <PromoBanner spotId="homeTwo" />
      </ForecastCardsProvider>
    );
  }
);

Index.displayName = 'Index';

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: true })(context),
    withTranslations(
      'today-card',
      'hourly-forecast-card',
      'summary-card',
      'daily-forecast-card',
      'banners',
      'meta-tags'
    )(context),
    remoteConfig.getAppConfig(),
  ]);

  if (!locationData) {
    console.error('[Index.getServerSideProps]: locationData is missing');

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
    console.error('[Index.getServerSideProps]: forecastCards are missing');

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
