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

export const MarketingBannerThird = ({
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
      backgroundSrc="/img_10.jpg"
      backgroundPriority={priorityLoad}
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

export default MarketingBannerThird;
