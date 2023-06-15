import React, { ReactElement } from 'react';
import {
  ComponentDefaultProps,
  Flex,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { GetClimeAppButton } from 'client/design-system/atoms';
import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerFifth = ({
  priorityLoad,
  ...bannerDefaultProps
}: {
  priorityLoad: boolean;
} & ComponentDefaultProps): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <BaseMarketingBanner
      {...bannerDefaultProps}
      backgroundSrc="/img_12.jpg"
      backgroundPriority={priorityLoad}
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
          <Flex me={3.5}>
            <Image src="/icons/ic_map.svg" width={24} height={24} alt="map" />
          </Flex>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Advanced Precipitation Forecast Map')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Flex me={3.5}>
            <Image
              src="/icons/ic_hurricane.svg"
              width={24}
              height={24}
              alt="hurricane"
            />
          </Flex>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Hurricane Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Flex me={3.5}>
            <Image
              src="/icons/ic_lightning.svg"
              width={24}
              height={24}
              alt="lightning"
            />
          </Flex>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Lightning Tracker')}
          </Text>
        </Flex>
        <Flex align="center" mb={2.5}>
          <Flex me={3.5}>
            <Image
              src="/icons/ic_rainscope.svg"
              width={24}
              height={24}
              alt="rainscope"
            />
          </Flex>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('RainScope')}
          </Text>
        </Flex>
        <Flex align="center">
          <Flex me={3.5}>
            <Image
              src="/icons/ic_wildfires.svg"
              width={24}
              height={24}
              alt="wildfires"
            />
          </Flex>
          <Text color="white" fontSize={14} lineHeight="14px" fontWeight="600">
            {t('Fire and Hotspot Map')}
          </Text>
        </Flex>
      </Flex>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a" isExternal>
          <GetClimeAppButton
            w="140px"
            variant="marketing-banner-button"
            mb={4}
            mx={4}
          >
            {t('Download Clime')}
          </GetClimeAppButton>
        </LinkOverlay>
      </NextLink>
    </BaseMarketingBanner>
  );
};

export default MarketingBannerFifth;
