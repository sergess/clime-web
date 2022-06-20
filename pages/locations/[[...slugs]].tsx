import React, { ReactElement, FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { LinkBox, LinkOverlay, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import last from 'ramda/src/last';
import takeLast from 'ramda/src/takeLast';

import { WEATHER_TODAY } from 'client/constants';
import { Card } from 'client/design-system/atoms';
import { RadarSnapshotStub } from 'client/design-system/organisms';

import { LocationChild, LocationParent } from 'common/types';

import { Geocode, RemoteConfig } from 'server/services';
import {
  withLocationData,
  withTranslations,
} from 'server/middlewares/get-server-side-props';

const Locations: FC<{ items: LocationChild[]; breadcrumbs: LocationParent[] }> =
  ({ items, breadcrumbs }): ReactElement => {
    const { t } = useTranslation('meta-tags');
    const [previousLocation, currentLocation] =
      breadcrumbs.length === 1
        ? [null, last(breadcrumbs)]
        : takeLast(2, breadcrumbs);

    const locationName = currentLocation?.name ?? '';
    const radar = currentLocation?.radar ?? false;

    return (
      <>
        <Head>
          {currentLocation?.type === 'world' ? (
            <>
              <title>
                {t('Check Current Weather in Your Location | Clime')}
              </title>
              <meta
                name="description"
                content={t(
                  'Get weather for today at your location and a local weather forecast for 10 days. Hourly weather in your area for 48 hours, current temp and chance of rain.'
                )}
              />
            </>
          ) : (
            <title>
              {t('Check Current Weather in {{locationName}} | Clime', {
                locationName,
              })}
            </title>
          )}

          {currentLocation?.type === 'continent' && (
            <meta
              name="description"
              content={t(
                radar
                  ? 'See the 10-day weather forecast in {{locationName}} with hourly weather for 48 hours. Temperature outside, chance of rain, radar map with detected precip, and more.'
                  : 'See the 10-day weather forecast in {{locationName}} with hourly weather for 48 hours. Temperature outside, chance of rain, wind direction and speed, and more.',
                { locationName }
              )}
            />
          )}

          {currentLocation?.type === 'country' && (
            <meta
              name="description"
              content={t(
                radar
                  ? 'Plan ahead with precise 10-day weather and 2-day hourly weather forecasts in {{locationName}}. Radar map with detected precip, temp outside, wind forecast, and more.'
                  : 'Plan ahead with precise 10-day weather and 2-day hourly weather forecasts in {{locationName}}. Temp outside, wind forecast, UV index, sunrise and sunset time, and more.',
                { locationName }
              )}
            />
          )}

          {currentLocation?.type === 'region' && (
            <meta
              name="description"
              content={t(
                radar
                  ? 'View weather by state and region. See 10-day forecast and radar map with detected precip for {{locationName}}. Hourly weather forecast for 2 days and temp outside.'
                  : 'View weather by state and region. See 10-day forecast for {{locationName}}. Hourly weather forecast for 2 days, current temperature, wind forecast, and more.',
                { locationName }
              )}
            />
          )}
        </Head>

        <Flex direction="column" flex={1}>
          {!!(previousLocation && currentLocation) && (
            <SimpleGrid
              columns={3}
              alignItems="center"
              textAlign="center"
              pb={4}
            >
              <LinkBox d="flex" alignItems="center">
                <Flex transform="rotate(180deg)">
                  <Image
                    src="/icons/arrow-50.svg"
                    width={20}
                    height={20}
                    layout="fixed"
                    alt={previousLocation.name}
                  />
                </Flex>

                <NextLink href={`/locations${previousLocation.url}`} passHref>
                  <LinkOverlay as="a">
                    <Text textStyle="14-semi-bold" color="gray.500" pl={2}>
                      {previousLocation.name}
                    </Text>
                  </LinkOverlay>
                </NextLink>
              </LinkBox>

              <Text as="h3" textStyle="16-semi-bold" color="gray.600">
                {currentLocation.name}
              </Text>
            </SimpleGrid>
          )}

          {items.map((item) => (
            <LinkBox key={`${item.name}-${item.url || item.slug}`} pb={1}>
              <Card p="18px 16px">
                <Flex justify="space-between" w="full">
                  <NextLink
                    href={
                      item.url
                        ? `/locations${item.url}`
                        : `/${WEATHER_TODAY}/${item.slug}`
                    }
                    passHref
                  >
                    <LinkOverlay as="a">
                      <Text textStyle="16-medium" color="blue.800">
                        {item.name}
                      </Text>
                    </LinkOverlay>
                  </NextLink>

                  <Image
                    src="/icons/arrow-50.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </Flex>
              </Card>
            </LinkBox>
          ))}
        </Flex>

        <RadarSnapshotStub
          h="full"
          minH="270px"
          maxH="600px"
          className="radar-snapshot__locations"
        />
      </>
    );
  };

export default Locations;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Cache-Control', 'public, max-age=10'); // 10 seconds

  const { locale, defaultLocale, query } = context;

  const userAgentHeader = context?.req?.headers?.['user-agent'];
  const language = locale || (defaultLocale as string);
  const slugs = (query?.slugs as string[]) ?? [];

  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: true })(context),
    withTranslations('meta-tags')(context),
    remoteConfig.getAppConfig(),
  ]);

  const geocodeService = new Geocode({ userAgentHeader });

  const locationTree = await geocodeService.getLocationTree({
    slug: slugs.join('/'),
    language,
  });

  if (!locationTree || !locationTree.parents || !locationTree.items) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      breadcrumbs: locationTree.parents,
      items: locationTree.items,
      locationData,
      appConfig,
      ...translations,
    },
  };
};
