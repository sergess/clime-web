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

export const MarketingBannerEighth = (
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
      bgImage="url('/img_15.jpg')"
      {...props}
    >
      <Flex
        h="full"
        w="full"
        direction="column"
        justify="flex-end"
        align="flex-start"
        pb={4}
        ps={3}
      >
        <Flex
          w="197px"
          h="114px"
          bgImage="url('/lightning-strikes-bg.png')"
          direction="column"
          justify="flex-start"
          align="center"
          px={5}
          pt={2.5}
        >
          <Text
            color="#361E00"
            fontSize={16}
            lineHeight="18px"
            fontWeight="700"
            letterSpacing="-0.4px"
          >
            {t('See where and when')}
          </Text>
          <Text
            color="white"
            fontSize={20}
            lineHeight="24px"
            fontWeight="800"
            textShadow="0px 2px 6px rgba(9, 17, 43, 0.25)"
            letterSpacing="-0.4px"
          >
            {t('lightning strikes')}
          </Text>
          <Text
            color="#361E00"
            fontSize={16}
            lineHeight="18px"
            fontWeight="700"
            letterSpacing="-0.4px"
          >
            {t('were detected')}
          </Text>
        </Flex>
      </Flex>
      <NextLink href={climeAppLink} passHref>
        <LinkOverlay as="a">
          <Button w="140px" variant="marketing-banner-button" mb={4} mx={4}>
            {t('Get Clime App')}
          </Button>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default MarketingBannerEighth;
