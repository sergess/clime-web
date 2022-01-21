import React, { ReactElement } from 'react';
import { Button, Flex, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { BackgroundImage } from 'client/design-system/atoms';
import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerEighth = ({
  priorityLoad,
}: {
  priorityLoad: boolean;
}): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <BaseMarketingBanner
      backgroundSrc="/img_15.jpg"
      backgroundPriority={priorityLoad}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        pb={4}
        ps={3}
      >
        <Flex w="197px" h="114px" position="relative">
          <BackgroundImage src="/lightning-strikes-bg.png" />

          <Flex
            position="relative"
            direction="column"
            justify="flex-start"
            align="center"
            px={5}
            pt={2.5}
          >
            <Text
              color="#361E00"
              fontSize={16}
              lineHeight="18px"
              fontWeight="700"
              letterSpacing="-0.4px"
            >
              {t('See where and when')}
            </Text>
            <Text
              color="white"
              fontSize={20}
              lineHeight="24px"
              fontWeight="800"
              textShadow="0px 2px 6px rgba(9, 17, 43, 0.25)"
              letterSpacing="-0.4px"
            >
              {t('lightning strikes')}
            </Text>
            <Text
              color="#361E00"
              fontSize={16}
              lineHeight="18px"
              fontWeight="700"
              letterSpacing="-0.4px"
            >
              {t('were detected')}
            </Text>
          </Flex>
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

export default MarketingBannerEighth;
