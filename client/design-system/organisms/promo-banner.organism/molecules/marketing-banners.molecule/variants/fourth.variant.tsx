import React, { ReactElement } from 'react';
import { Button, Flex, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import { useClimeAppLink } from 'client/hooks';

import { BaseMarketingBanner } from '../molecules';

export const MarketingBannerFourth = ({
  priorityLoad,
}: {
  priorityLoad: boolean;
}): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');

  return (
    <BaseMarketingBanner
      backgroundSrc="/img_11.jpg"
      backgroundPriority={priorityLoad}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        ps={4}
        pb={12}
      >
        <Text
          color="white"
          fontSize={29}
          lineHeight="32px"
          fontWeight="800"
          letterSpacing="-0.4px"
          textShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
          w="170px"
          textAlign="center"
        >
          {t('Stay ahead')}
        </Text>
        <Flex
          bg="#2DE886"
          boxShadow="0 2px 8px rgba(45, 232, 134, 0.2)"
          borderRadius="0 4px"
          h="32px"
          w="170px"
          alignItems="center"
          justifyContent="center"
          mt={0.5}
        >
          <Text color="black" fontSize={16} lineHeight="18px" fontWeight="700">
            {t('of weather changes')}
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

export default MarketingBannerFourth;
