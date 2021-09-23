import React, { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Text, Flex } from '@chakra-ui/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TodayCard } from 'client/design-system/organisms';
import { SwitchSelector } from 'client/design-system/molecules';
import {
  SwitchItem,
  SummaryTemperatureIcon,
  SummaryPrecipitationIcon,
  SummaryWindIcon,
} from 'client/design-system/atoms';

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

import { RenderButtonProps } from 'client/design-system/molecules/switch-selector.molecule/types';

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

  // [TODO] after review will be removed
  type DataProps = {
    text: string;
  };

  const data: DataProps[] = [
    {
      text: 'inches',
    },
    {
      text: 'mm',
    },
    {
      text: 'mbar',
    },
  ];

  type Data2Props = {
    icon: ReactElement;
  };

  const data2: Data2Props[] = [
    {
      icon: <SummaryTemperatureIcon boxSize="6" />,
    },
    {
      icon: <SummaryPrecipitationIcon boxSize="6" />,
    },
    {
      icon: <SummaryWindIcon boxSize="6" />,
    },
  ];

  const textButtons = ({
    index,
    onSelect,
    item,
    selectedItem,
  }: RenderButtonProps<DataProps>): ReactElement => (
    <SwitchItem
      key={index}
      onSelect={() => onSelect(index)}
      selected={selectedItem === index}
      content={
        <Text px="2.5" lineHeight="36px">
          {item.text}
        </Text>
      }
    />
  );

  const iconButtons = ({
    index,
    onSelect,
    item,
    selectedItem,
  }: RenderButtonProps<Data2Props>) => (
    <SwitchItem
      key={index}
      onSelect={() => onSelect(index)}
      selected={selectedItem === index}
      content={
        <Flex align="center" h="28px">
          {item.icon}
        </Flex>
      }
    />
  );

  return (
    <>
      <main>
        <TodayCard locationExact />

        <SwitchSelector renderButton={textButtons} data={data} />

        <SwitchSelector renderButton={iconButtons} data={data2} />
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
          'today-page',
          'footer',
          'header',
        ]))),
    },
  };
};
