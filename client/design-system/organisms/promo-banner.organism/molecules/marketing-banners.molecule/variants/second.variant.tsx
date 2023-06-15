import React, { ReactElement } from 'react';
import {
  ComponentDefaultProps,
  Flex,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { GetClimeAppButton } from 'client/design-system/atoms';
import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerSecond = ({
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
      backgroundSrc="/img_9.jpg"
      backgroundPriority={priorityLoad}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        pb={14}
        ps={4}
      >
        <Flex
          boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
          bgGradient="linear(178.68deg, #FFFFFF 1.1%, #DADADA 98.85%)"
          h={34}
          w={142}
          alignItems="center"
          justifyContent="center"
          transformOrigin="0 100%"
          transform="skew(-8deg)"
          ms={3.5}
          pos="relative"
          zIndex={2}
          borderRadius="1px"
        >
          <Text
            color="black"
            fontSize={20}
            lineHeight="24px"
            fontWeight="800"
            transformOrigin="0 0"
            transform="skew(8deg)"
          >
            {t('Stay ahead')}
          </Text>
        </Flex>
        <Flex
          boxShadow="0px 8px 20px rgba(0, 0, 0, 0.5), inset -1px 1px 1px rgba(255, 255, 255, 0.2)"
          bgGradient="linear(181.05deg, #EA4343 0.67%, #FF1717 98.87%)"
          borderRadius="1px"
          h="48px"
          w="206px"
          alignItems="center"
          justifyContent="center"
          transformOrigin="0 100%"
          transform="skew(-8deg)"
          mt={-1}
        >
          <Text
            color="white"
            fontSize={28}
            lineHeight="34px"
            fontWeight="700"
            transformOrigin="0 0"
            transform="skew(8deg)"
            textShadow="1px 2px 4px rgba(0, 0, 0, 0.2)"
          >
            {t('of fire danger')}
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

export default MarketingBannerSecond;
