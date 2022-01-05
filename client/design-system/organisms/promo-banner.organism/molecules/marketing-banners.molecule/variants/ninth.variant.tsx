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

export const MarketingBannerNinth = (
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
      bgImage="url('/img_16.jpg')"
      {...props}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        pb={3}
        ps={2}
      >
        <Text
          color="white"
          fontSize={24}
          lineHeight="34px"
          fontWeight="600"
          textShadow="0px 2px 2px rgba(0, 0, 0, 0.2)"
          ps={2}
        >
          {t('Prep for storms')}
        </Text>
        <Flex
          boxShadow="4px 4px 16px rgba(60, 131, 232, 0.2)"
          borderRadius="12px 2px"
          bgGradient="linear(270.26deg, #CB4BF9 0.22%, #3689FF 99.78%)"
          h="38px"
          w="220px"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="white"
            fontSize={30}
            lineHeight="36px"
            fontWeight="700"
            textShadow="0px 2px 2px rgba(0, 0, 0, 0.2)"
          >
            {t('rain and snow')}
          </Text>
        </Flex>
        <Text
          color="white"
          fontSize={24}
          lineHeight="34px"
          fontWeight="600"
          textShadow="0px 2px 2px rgba(0, 0, 0, 0.2)"
          ps={2}
        >
          {t('before either falls!')}
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

export default MarketingBannerNinth;
