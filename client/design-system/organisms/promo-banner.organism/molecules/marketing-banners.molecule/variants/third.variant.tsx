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

export const MarketingBannerThird = (
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
      alignItems="flex-start"
      bgImage="url('/img_10.jpg')"
      bgColor="rgb(27, 29, 43)"
      {...props}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        px={4}
      >
        <Text
          color="white"
          fontSize={24}
          lineHeight="28px"
          fontWeight="800"
          pb={3}
        >
          {t('Prep for storms and hurricanes')}
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

export default MarketingBannerThird;
