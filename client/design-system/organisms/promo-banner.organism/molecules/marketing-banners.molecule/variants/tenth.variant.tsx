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

export const MarketingBannerTenth = ({
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
      backgroundSrc="/img_17.jpg"
      backgroundPriority={priorityLoad}
      containerStyles={{
        alignItems: 'center',
      }}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="center"
        pb={2.5}
      >
        <Text
          color="white"
          fontSize={24}
          lineHeight="28px"
          fontWeight="700"
          letterSpacing="-0.4px"
          pb={2}
          textShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
        >
          {t('Temperature Forecast Map')}
        </Text>
        <Text
          color="white"
          fontSize={16}
          lineHeight="20px"
          fontWeight="700"
          letterSpacing="-0.4px"
          textShadow="0 2px 8px rgba(0, 0, 0, 0.2)"
        >
          {t('Track forecasted temps on the map')}
        </Text>
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

export default MarketingBannerTenth;
