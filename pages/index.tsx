import React, { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard, HourlyForecastCard } from 'client/design-system/organisms';
import { Card } from 'client/design-system/atoms';
import { DefaultLayout } from 'client/design-system/templates';

import { getValidRedirectUrl } from 'client/utils';
import { WEATHER_TODAY } from 'client/constants';
import { IndexPageProps } from 'client/types';

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
  withHourlyForecastCard,
} from 'server/middlewares/data-preparation';
import { Forecast, Geocode } from 'server/services';

const Index = ({
  todayCardData,
  hourlyForecastCardData,
}: IndexPageProps): ReactElement => {
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
      <TodayCard
        data={todayCardData}
        pt="5"
        pb={{ md: 2 }}
        maxW={{ xl: 380 }}
        w="full"
      />
      <Card h="260px" w="full" maxW={{ xl: 380 }}>
        Block 1
      </Card>
      <Box bg="gray.400" w="full" h="260px" gridColumn={{ xl: 'span 2' }}>
        ads 3
      </Box>
      <Card h="260px" w="full" maxW={{ xl: 380 }}>
        Block 2
      </Card>
      <Card h="260px" maxW={{ xl: 380 }} w="full">
        Block 3
      </Card>
      <Card h="260px" maxW={{ xl: 380 }} w="full">
        Block 4
      </Card>
      <HourlyForecastCard data={hourlyForecastCardData} py="5" w="full" />
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

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
      todayCardData: withTodayCard(forecastFeed, locationData),
      hourlyForecastCardData: withHourlyForecastCard(
        forecastFeed,
        locationData
      ),
      locationData,
      browserInfo: withBrowserInfo(context),

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'common',
          'weather-today-page',
        ]))),
    },
  };
};
