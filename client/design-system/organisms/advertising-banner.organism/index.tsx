import React, { ReactElement, FC } from 'react';
import {
  ComponentDefaultProps,
  LinkBox,
  Text,
  Flex,
  Box,
  LinkOverlay,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';

import { useClimeAppLink } from 'client/hooks';
import { BackgroundVideo } from 'client/design-system/atoms';

export const AdvertisingBanner: FC<
  { showBackgroundVideo: boolean } & ComponentDefaultProps
> = ({ showBackgroundVideo = false, ...componentStyles }): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <LinkBox
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
      {...componentStyles}
    >
      {showBackgroundVideo && (
        <BackgroundVideo
          source={{
            src: '/ads-map-animation.mp4',
            type: 'video/mp4',
          }}
          poster="/ads-map-poster.jpg"
          containerStyles={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
            left: 0,
            top: 0,
          }}
        />
      )}
      <Box mt={297} position="relative">
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
              alt={t('RainScope')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('RainScope')}
          </Text>
        </Flex>
        <Flex align="center" mb={3.5}>
          <Box me={2.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_wildfires.svg"
              layout="fill"
              alt={t('Fires and Hotspots Map')}
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Fires and Hotspots Map')}
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
          <Button w="140px" variant="marketing-banner-button">
            {t('Get Clime App')}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default AdvertisingBanner;
