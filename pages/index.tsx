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
  useRedirectToAppPopupOpened,
} from 'client/hooks';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';
import { ForecastCards, ForecastCard } from 'common/types';

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
import { Heading } from '@chakra-ui/react';

const Index: FC<{ forecastCards: ForecastCards }> = memo(
  ({ forecastCards }): ReactElement => {
    const router = useRouter();
    const { cookies, setCookie } = useCookies([
      EXACT_LATITUDE_COOKIE,
      EXACT_LONGITUDE_COOKIE,
    ]);
    const [latitudeCookie, longitudeCookie] = cookies as (string | undefined)[];
    const redirectToAppPopupOpened = useRedirectToAppPopupOpened();

    const locationFromBrowser = useLocationFromBrowser({
      skip: (!!latitudeCookie && !!longitudeCookie) || redirectToAppPopupOpened,
    });
    const { data: exactLocationData } =
      useLocationDataByCoordinates(locationFromBrowser);
    const hasMounted = useHasMounted();

    useEffect(() => {
      if (
        !redirectToAppPopupOpened &&
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
      redirectToAppPopupOpened,
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
        <TodayCard
          heading={
            <Heading
              as="h1"
              color="gray.500"
              fontSize="16px"
              fontWeight="500"
              lineHeight="16px"
            >
              {t('Local Weather')}
            </Heading>
          }
          w="full"
        />
        <RadarSnapshotStub
          h="full"
          minH="270px"
          className="radar-snapshot__home"
          order={{ base: 2, md: 0 }}
        />
        <PromoBanner
          spotId="homeOne"
          className="banner__home-one"
          priorityLoad
        />
        <HourlyForecastCard w="full" className="hourly-block__home" />
        <AdsenseBanner
          client={CLIENT_ID}
          slot="7916559712"
          w="full"
          h="100px"
        />
        <SummaryCard
          w="full"
          h="260px"
          order={{ base: 1, md: 0 }}
          className="summary-block__home"
        />
        <DailyForecastCard
          className="daily-block__home"
          w="full"
          order={{ base: 3, md: 0 }}
        />
        <PromoBanner spotId="homeTwo" className="banner__home-two" />
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
      appConfig,
      ...translations,
    },
  };
};
