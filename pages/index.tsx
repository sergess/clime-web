import { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard } from 'client/design-system/organisms';
import {
  useHasMounted,
  useCookies,
  useLocationFromBrowser,
  useLocationDataByCoordinates,
} from 'client/hooks';

import { FORECAST_ZONE_ID_COOKIE } from 'common/constants';

import {
  withLocationDataByIp,
  withApiV3Service,
  withCookie,
} from 'server/middlewares/get-server-side-props';
import { Forecast } from 'server/services';

const Index = (): ReactElement => {
  const router = useRouter();
  const { cookies: forecastZoneIdCookie, setCookie: setForecastZoneIdCookie } =
    useCookies(FORECAST_ZONE_ID_COOKIE);
  const browserLocation = useLocationFromBrowser({
    skip: !!forecastZoneIdCookie,
  });
  const { data: locationData } = useLocationDataByCoordinates(browserLocation);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted && locationData && !forecastZoneIdCookie) {
      const { countryCode, city, forecastZoneId } = locationData;

      setForecastZoneIdCookie(
        FORECAST_ZONE_ID_COOKIE,
        forecastZoneId.toString()
      );

      // [TODO] Save to app's state flag that location was detected using Browser API
      router.push(
        encodeURI(`/weather-today/${countryCode}/${city}/${forecastZoneId}`)
      );
    }
  }, [hasMounted, locationData, forecastZoneIdCookie]);

  return (
    <>
      <main>
        <TodayCard locationExact />
      </main>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, defaultLocale } = context;

  const forecastZoneIdFromCookies = withCookie(
    context,
    FORECAST_ZONE_ID_COOKIE
  );
  const locationData = !forecastZoneIdFromCookies
    ? await withLocationDataByIp(context)
    : null;

  const forecastService = withApiV3Service<Forecast>(context, Forecast);
  const forecastFeed = await forecastService.getForecastFeed({
    forecastZoneId:
      forecastZoneIdFromCookies || (locationData?.forecastZoneId as number),
    language: locale || (defaultLocale as string),
  });

  return {
    props: {
      initialState: {
        forecastFeed,
      },

      ...(!!locale &&
        (await serverSideTranslations(locale, [
          'today-card',
          'footer',
          'header',
        ]))),
    },
  };
};
