import React, { ReactElement } from 'react';
import { Text, Box, LinkBox, LinkOverlay, Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';

import { useClimeAppLink } from 'client/hooks';
import { ANDROID_STORE_LINK, IOS_STORE_LINK } from 'client/constants';

export const ResponsiveBannerFirst = ({
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
      bgGradient="linear(115deg, #FFFFFF 40%, #D3E3FA 100%)"
      boxShadow="0 4px 8px rgba(26, 96, 179, 0.1), inset 0px -2px 0px rgba(60, 131, 232, 0.1)"
      h={!wide ? '260px' : '200px'}
      px={5}
      pt={!wide ? 6 : 5}
      pb={5}
    >
      <Box
        pos="absolute"
        w={!wide ? '293px' : '442px'}
        h={!wide ? '330px' : '499px'}
        top={!wide ? '-56px' : '-160px'}
        right={!wide ? '-90px' : '0'}
      >
        <Image
          src="/banner-one-phone.png"
          layout="fill"
          priority
          alt="Keep your weather forecast at hand!"
        />
      </Box>
      <Box w={!wide ? '210px' : '320px'}>
        <Text
          color="black"
          fontSize={!wide ? 22 : 28}
          lineHeight={!wide ? '27px' : '34px'}
          fontWeight="700"
          pb={!wide ? 5 : 4}
        >
          {t('Keep your weather forecast at hand!')}
        </Text>
        <Text
          color="gray.500"
          fontSize={!wide ? 14 : 16}
          lineHeight={!wide ? '14px' : '16px'}
          fontWeight="600"
          pb={!wide ? 10 : 4}
        >
          <NextLink href={climeAppLink} passHref>
            <LinkOverlay isExternal>{t('Download the Clime app.')}</LinkOverlay>
          </NextLink>
        </Text>
        <Flex flexDirection={!wide ? 'column' : 'row'}>
          <NextLink href={IOS_STORE_LINK} passHref>
            <Link href={IOS_STORE_LINK} isExternal>
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
            </Link>
          </NextLink>
          <NextLink href={ANDROID_STORE_LINK} passHref>
            <Link href={ANDROID_STORE_LINK} isExternal>
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
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </LinkBox>
  );
};

export default ResponsiveBannerFirst;
