import React, { ReactElement, useMemo } from 'react';
import { LinkBox, Box, Text, LinkOverlay, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';

import climeTheme from 'client/theme';
import { useLocationData, useUrlSlug } from 'client/hooks';
import { ClientOnly, WeatherStateIcon } from 'client/design-system/atoms';
import { useTodayCardData } from 'client/design-system/organisms/today-card.organism/hooks';

import { WEATHER_TODAY } from 'client/constants';
import { getShortLocationName } from './utils';

export const TodayWeatherBanner = (): ReactElement | null => {
  const { t } = useTranslation(['banners', 'today-card']);

  const locationData = useLocationData();

  const urlSlug = useUrlSlug();

  const location = useMemo(
    () => getShortLocationName(locationData),
    [locationData]
  );

  const todayCardData = useTodayCardData();

  if (!todayCardData) return null;

  const { night, stateId, temperature } = todayCardData;

  return (
    <LinkBox
      display="flex"
      sx={{
        [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]: {
          display: 'none',
        },
      }}
      w="full"
      maxW="400px"
      justifyContent="flex-end"
      alignItems="center"
      ps={4}
    >
      <WeatherStateIcon
        stateId={stateId}
        night={night}
        width={40}
        height={40}
        priority
      />
      <Box ps={5} w="full" color="gray.500" textStyle="16-medium">
        {t('Today’s Weather')}
        <Text color="blue.800" textStyle="16-semi-bold" pt={1}>
          {location}
        </Text>
      </Box>
      <ClientOnly>
        <NextLink href={`/${WEATHER_TODAY}/${urlSlug}`} passHref>
          <LinkOverlay>
            <Flex align="center">
              <Text color="blue.800" textStyle="20-content-medium" pe={5}>
                {temperature}&#176;
              </Text>
              <Box w={4} h={4}>
                <Image
                  src="/icons/carousel-arrow.png"
                  width={20}
                  height={20}
                  alt="More"
                />
              </Box>
            </Flex>
          </LinkOverlay>
        </NextLink>
      </ClientOnly>
    </LinkBox>
  );
};

export default TodayWeatherBanner;
