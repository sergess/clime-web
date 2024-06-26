import React, { ReactElement } from 'react';
import {
  Button,
  Flex,
  LinkOverlay,
  Text,
  Box,
  ComponentDefaultProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerSeventh = ({
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
      backgroundSrc="/img_14.jpg"
      backgroundPriority={priorityLoad}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        pb={12}
        ps={4}
      >
        <Flex
          boxShadow="2px 2px 4px rgba(0, 0, 0, 0.25)"
          bgGradient="linear(178.68deg, #FFFFFF 1.1%, #DADADA 98.85%)"
          h="32px"
          w="121px"
          alignItems="center"
          justifyContent="center"
          transformOrigin="0 100%"
          transform="skew(-6deg)"
          ms={5}
          pos="relative"
          zIndex={2}
          borderRadius="2px"
        >
          <Text
            color="black"
            fontSize={16}
            lineHeight="19px"
            fontWeight="800"
            transformOrigin="0 0"
            transform="skew(6deg)"
          >
            {t('Keep track')}
          </Text>
          <Box
            w="30px"
            h="45px"
            transformOrigin="0 0"
            transform="skew(6deg)"
            pos="absolute"
            right="-13px"
            top="-22px"
          >
            <Image
              src="/icons/keep-track-fire-ico.svg"
              layout="fill"
              alt="fire"
            />
          </Box>
        </Flex>
        <Flex
          boxShadow="0px 8px 20px rgba(0, 0, 0, 0.5), inset -1px 1px 1px rgba(255, 255, 255, 0.2)"
          bgGradient="linear(181.05deg, #EA4343 0.67%, #FF1717 98.87%)"
          borderRadius="1px"
          h="48px"
          w="190px"
          alignItems="center"
          justifyContent="center"
          transformOrigin="0 100%"
          transform="skew(-6deg)"
          mt={-1}
        >
          <Text
            color="white"
            fontSize={30}
            lineHeight="34px"
            fontWeight="700"
            transformOrigin="0 0"
            transform="skew(6deg)"
            textShadow="1px 2px 4px rgba(0, 0, 0, 0.2)"
          >
            {t('of wildfires')}
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
    </BaseMarketingBanner>
  );
};

export default MarketingBannerSeventh;
