import React, { ReactElement } from 'react';
import { Text, Box, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';

import { useClimeAppLink } from 'client/hooks';

export const ResponsiveBannerSecond = ({
  wide,
}: {
  wide: boolean;
}): ReactElement => {
  const { t } = useTranslation('banners');
  const climeAppLink = useClimeAppLink();

  return (
    <LinkBox
      d="flex"
      borderRadius={16}
      flexDirection="column"
      justifyContent="space-between"
      overflow="hidden"
      alignItems="flex-start"
      bg="url('/bg-responsive-banner.png'), linear-gradient(180deg, #051F14 0%, #0C142E 100%)"
      bgSize="cover"
      bgPosition="center bottom"
      boxShadow="0 4px 8px rgba(26, 96, 179, 0.1), inset 0px -2px 0px rgba(60, 131, 232, 0.1)"
      h={!wide ? '260px' : '200px'}
      px={5}
      pt={!wide ? 9 : 5}
      pb={5}
    >
      <Box
        w={!wide ? '235px' : '338px'}
        h={!wide ? '326px' : '469px'}
        pos="absolute"
        right={!wide ? '7px' : '113px'}
        top={!wide ? '-55px' : '-233px'}
      >
        <Image
          src="/banner-two-phone.png"
          layout="fill"
          priority
          alt="Keep your weather forecast at hand!"
        />
      </Box>
      <Box w={!wide ? '215px' : '320px'}>
        <Text
          color="white"
          fontSize={!wide ? 18 : 28}
          lineHeight={!wide ? '22px' : '34px'}
          fontWeight="700"
          pb={!wide ? 8 : 4}
        >
          {t('Keep your weather forecast at hand!')}
        </Text>
        <Text
          color={!wide ? 'gray.50' : '#ABAFB9'}
          fontSize={!wide ? 12 : 16}
          lineHeight={!wide ? '12px' : '16px'}
          fontWeight={!wide ? '600' : '500'}
          pb={!wide ? 8 : 4}
        >
          <NextLink href={climeAppLink} passHref>
            <LinkOverlay>{t('Download the Clime app.')}</LinkOverlay>
          </NextLink>
        </Text>
        <Flex flexDirection={!wide ? 'column' : 'row'}>
          <Box
            w="120px"
            h="40px"
            position="relative"
            mb={!wide ? 1.5 : 0}
            me={!wide ? 0 : 3}
          >
            <Image
              src="/icons/app-store.svg"
              layout="fill"
              priority
              alt="App Store"
            />
          </Box>
          <Box
            w={!wide ? '120px' : '135px'}
            h={!wide ? '37px' : '40px'}
            position="relative"
          >
            <Image
              src="/icons/google-play.svg"
              layout="fill"
              priority
              alt="Google Play"
            />
          </Box>
        </Flex>
      </Box>
    </LinkBox>
  );
};

export default ResponsiveBannerSecond;
