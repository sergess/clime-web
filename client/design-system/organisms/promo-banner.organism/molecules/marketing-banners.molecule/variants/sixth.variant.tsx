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

export const MarketingBannerSixth = (
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
      bgImage="url('/img_13.jpg')"
      {...props}
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
          {t('Prep for storms')}
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
    </LinkBox>
  );
};

export default MarketingBannerSixth;
