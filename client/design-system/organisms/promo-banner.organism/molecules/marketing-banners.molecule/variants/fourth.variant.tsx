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

export const MarketingBannerFourth = (
  props: ComponentDefaultProps
): ReactElement => {
  const climeAppLink = useClimeAppLink();
  const { t } = useTranslation('banners');
  return (
    <LinkBox
      borderRadius={16}
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      bgSize="cover"
      bgPosition="center center"
      h={250}
      alignItems="flex-start"
      bgImage="url('/img_11.jpg')"
      {...props}
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
    </LinkBox>
  );
};

export default MarketingBannerFourth;
