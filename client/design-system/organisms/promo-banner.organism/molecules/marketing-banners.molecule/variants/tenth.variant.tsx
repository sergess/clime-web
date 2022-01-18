import React, { ReactElement } from 'react';
import {
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
import {
  DEFAULT_BANNER_HEIGHT,
  DEFAULT_BANNER_BORDER_RADIUS,
} from 'client/design-system/organisms/promo-banner.organism/constants';

export const MarketingBannerTenth = (
  props: ComponentDefaultProps
): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <LinkBox
      borderRadius={DEFAULT_BANNER_BORDER_RADIUS}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center center"
      h={DEFAULT_BANNER_HEIGHT}
      alignItems="center"
      bgImage="url('/img_17.jpg')"
      bgColor="rgb(176, 117, 30)"
      {...props}
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
    </LinkBox>
  );
};

export default MarketingBannerTenth;
