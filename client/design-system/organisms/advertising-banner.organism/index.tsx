import React, { ReactElement, FC } from 'react';
import {
  ComponentDefaultProps,
  Text,
  Flex,
  Box,
  LinkOverlay,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';

import {
  GetClimeAppButton,
  GetClimeAppOverlay,
} from 'client/design-system/atoms';
import { useClimeAppLink } from 'client/hooks';

export const AdvertisingBanner: FC<ComponentDefaultProps> = (
  props
): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <GetClimeAppOverlay
      borderRadius={16}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      alignItems="flex-start"
      bg="#081336"
      px={6}
      pb={8}
      position="relative"
      {...props}
    >
      <Box pos="absolute" top="0" left="0">
        <Image
          src="/map-background.jpg"
          width={380}
          height={408}
          alt="All Pro Features"
        />
      </Box>
      <Box mt={275} position="relative">
        <Text
          color="white"
          fontSize={48}
          lineHeight="48px"
          fontWeight="700"
          pb={5}
        >
          {t('All Pro Features')}
        </Text>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_map.svg"
              layout="fill"
              alt={t('Advanced Precipitation Forecast Map')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Advanced Precipitation Forecast Map')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_hurricane.svg"
              layout="fill"
              alt={t('Hurricane Tracker')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Hurricane Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_lightning.svg"
              layout="fill"
              alt={t('Lightning Tracker')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Lightning Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_rainscope.svg"
              layout="fill"
              alt={t('RainScope (minute-by-minute precipitation)')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('RainScope (minute-by-minute precipitation)')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_wildfires.svg"
              layout="fill"
              alt={t('Fire and Hotspot Map')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Fire and Hotspot Map')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic-promo-alerts.svg"
              layout="fill"
              alt={t('Precipitation Notifications')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Precipitation Notifications')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic-daily-update.svg"
              layout="fill"
              alt={t('Daily Weather Updates')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Daily Weather Updates')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic-aqi.svg"
              layout="fill"
              alt={t('Air Quality Index')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Air Quality Index')}
          </Text>
        </Flex>
        <Flex align="center" mb={8}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic-tn.svg"
              layout="fill"
              alt={t('Thunderstorm Notifications')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Thunderstorm Notifications')}
          </Text>
        </Flex>
      </Box>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a" isExternal>
          <GetClimeAppButton w="140px" variant="marketing-banner-button">
            {t('Download Clime')}
          </GetClimeAppButton>
        </LinkOverlay>
      </NextLink>
    </GetClimeAppOverlay>
  );
};

export default AdvertisingBanner;
