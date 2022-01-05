import React, { ReactElement } from 'react';
import {
  Box,
  Button,
  ComponentDefaultProps,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { useClimeAppLink } from 'client/hooks';
import Image from 'next/image';

export const MarketingBannerFifth = (
  props: ComponentDefaultProps
): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');
  return (
    <LinkBox
      borderRadius={16}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center center"
      h={250}
      alignItems="flex-start"
      bgImage="url('/img_12.jpg')"
      {...props}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="center"
        align="flex-start"
        ps={3.5}
      >
        <Flex align="center" mb={2.5}>
          <Box me={3.5} boxSize="6" pos="relative">
            <Image src="/icons/ic_map.svg" layout="fill" priority alt="map" />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Advanced Precipitation Forecast Map')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Box me={3.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_hurricane.svg"
              layout="fill"
              priority
              alt="hurricane"
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Hurricane Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Box me={3.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_lightning.svg"
              layout="fill"
              priority
              alt="lightning"
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Lightning Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Box me={3.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_rainscope.svg"
              layout="fill"
              priority
              alt="rainscope"
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('RainScope')}
          </Text>
        </Flex>
        <Flex align="center">
          <Box me={3.5} boxSize="6" pos="relative">
            <Image
              src="/icons/ic_wildfires.svg"
              layout="fill"
              priority
              alt="wildfires"
            />
          </Box>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Fires and Hotspots Map')}
          </Text>
        </Flex>
      </Flex>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a" isExternal>
          <Button w="140px" variant="marketing-banner-button" mb={4} mx={4}>
            {t('Get Clime App')}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default MarketingBannerFifth;
