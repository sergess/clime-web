import React, { ReactElement, useEffect, memo } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  TodayCard,
  HourlyForecastCard,
  SummaryCard,
  DailyForecastCard,
} from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';

import { getValidRedirectUrl } from 'client/utils';
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
import { isLocationValid } from 'common/utils';

import {
  withLocationDataByIp,
  withApiV3Service,
  withCookie,
  withBrowserInfo,
} from 'server/middlewares/get-server-side-props';
import {
  withTodayCard,
  withSummaryCard,
  withHourlyForecastCard,
  withDailyForecastCard,
} from 'server/middlewares/data-mapper';
import { Forecast, Geocode } from 'server/services';

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
      const { countryCode, city, forecastZoneId } = exactLocationData;

      setCookie(EXACT_LATITUDE_COOKIE, `${locationFromBrowser?.latitude}`);
      setCookie(EXACT_LONGITUDE_COOKIE, `${locationFromBrowser?.longitude}`);

      const redirectUrl = getValidRedirectUrl(
        WEATHER_TODAY,
        countryCode as string,
        city as string,
        forecastZoneId
      );

      router.push(redirectUrl);
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
      <Card
        w="full"
        h="200px"
        bg="gray.400"
        color="white"
        justifyContent="center"
      >
        APP PROMO BANNER
      </Card>
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
  const { locale, defaultLocale } = context;

  const geocodeService = withApiV3Service<Geocode>(context, Geocode);

  const latitudeFromCookies = withCookie(context, EXACT_LATITUDE_COOKIE);
  const longitudeFromCookies = withCookie(context, EXACT_LONGITUDE_COOKIE);
  const locationFromCookies = {
    latitude: Number(latitudeFromCookies),
    longitude: Number(longitudeFromCookies),
  };

  const locationData = isLocationValid(locationFromCookies)
    ? await geocodeService.getLocationDataByCoordinates({
        ...locationFromCookies,
        language: locale || (defaultLocale as string),
      })
    : await withLocationDataByIp(context);

  const forecastService = withApiV3Service<Forecast>(context, Forecast);
  const forecastFeed = await forecastService.getForecastFeed({
    forecastZoneId: locationData?.forecastZoneId as number,
    language: locale || (defaultLocale as string),
  });

  if (!forecastFeed) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cards: {
        today: withTodayCard(forecastFeed, locationData),
        hourlyForecast: withHourlyForecastCard(forecastFeed, locationData),
        summary: withSummaryCard(forecastFeed),
        dailyForecast: withDailyForecastCard(forecastFeed, locationData),
      },
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'today-card',
          'hourly-forecast-card',
          'summary-card',
          'daily-forecast-card',
        ]))),
    },
  };
};
