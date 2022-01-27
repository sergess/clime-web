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

export const MarketingBannerFirst = ({
  priorityLoad,
  ...bannerDefaultProps
}: {
  priorityLoad: boolean;
} & ComponentDefaultProps): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <BaseMarketingBanner
      backgroundSrc="/img_8.jpg"
      backgroundPriority={priorityLoad}
      {...bannerDefaultProps}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="center"
        align="flex-start"
        px={4}
      >
        <Text
          color="white"
          fontSize={28}
          lineHeight="32px"
          fontWeight="700"
          pb={5}
        >
          {t('Fires and Hotspots Map')}
        </Text>
        <Text color="white" fontSize={18} lineHeight="24px" fontWeight="500">
          {t('See active fires and hotspots detected by satellite systems')}
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

export default MarketingBannerFirst;
