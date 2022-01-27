import React, { ReactElement } from 'react';
import {
  Button,
  ComponentDefaultProps,
  Flex,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerSixth = ({
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
      backgroundSrc="/img_13.jpg"
      backgroundPriority={priorityLoad}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        ps={4}
        pb={5}
      >
        <Text
          color="white"
          fontSize={22}
          lineHeight="34px"
          fontWeight="700"
          textShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          w="180px"
          textAlign="center"
        >
          {t('Prep for both')}
        </Text>
        <Flex
          boxShadow="4px 4px 16px rgba(0, 0, 0, 0.5)"
          borderRadius="8px 8px 2px 8px"
          bgGradient="linear(272.71deg, #FD1515 0%, #FF1A7A 99.6%)"
          h="40px"
          w="180px"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="white"
            fontSize={22}
            lineHeight="34px"
            fontWeight="700"
            textShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          >
            {t('and hurricanes')}
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

export default MarketingBannerSixth;
