import React, { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';

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
} from 'server/middlewares/get-server-side-props';
import { Forecast, Geocode } from 'server/services';

const Index = (): ReactElement => {
  const router = useRouter();
  const { cookies, setCookie } = useCookies([
    EXACT_LATITUDE_COOKIE,
    EXACT_LONGITUDE_COOKIE,
  ]);
  const [latitudeCookie, longitudeCookie] = cookies as (string | undefined)[];
  const locationFromBrowser = useLocationFromBrowser({
    skip: !!latitudeCookie && !!longitudeCookie,
  });
  const { data: locationData } =
    useLocationDataByCoordinates(locationFromBrowser);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted && locationData && !latitudeCookie && !longitudeCookie) {
      const { countryCode, city, forecastZoneId } = locationData;

      setCookie(EXACT_LATITUDE_COOKIE, `${locationFromBrowser?.latitude}`);
      setCookie(EXACT_LONGITUDE_COOKIE, `${locationFromBrowser?.longitude}`);

      router.push(
        encodeURI(`/weather-today/${countryCode}/${city}/${forecastZoneId}`)
      );
    }
  }, [
    hasMounted,
    locationData,
    locationFromBrowser,
    latitudeCookie,
    longitudeCookie,
  ]);

  return (
    <>
      <TodayCard />
      <HourlyForecastCard />
    </>
  );
};

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

  return {
    props: {
      initialState: {
        forecastFeed,
        locationData,
      },

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
