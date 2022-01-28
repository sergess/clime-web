import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Flex, LinkBox, LinkOverlay, Text, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import climeTheme from 'client/theme';
import { useClimeAppLink } from 'client/hooks';
import { DEFAULT_BLUR_DATA_URL } from 'client/constants/blur-data-urls.constant';

export const HeaderBanner = (): ReactElement => {
  const { t } = useTranslation('banners');
  const climeAppLink = useClimeAppLink();

  return (
    <Flex
      sx={{
        [`@media not screen and (min-width: ${climeTheme.breakpoints.lg})`]: {
          display: 'none',
        },
      }}
      w="full"
      maxW="400px"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <LinkBox display="flex">
        <Flex
          pe={3}
          alignItems="flex-end"
          justifyContent="center"
          flexDirection="column"
        >
          <Text textStyle="16-bold" color="blue.800" pb={2}>
            {t('Clime Mobile App')}
          </Text>
          <NextLink href={climeAppLink} passHref>
            <LinkOverlay
              textStyle="16-bold"
              color="blue.500"
              display="flex"
              alignItems="center"
              isExternal
            >
              {t('GET')}
              <Image
                src="/icons/arrow-100.svg"
                width={20}
                height={20}
                alt="GET"
              />
            </LinkOverlay>
          </NextLink>
        </Flex>
        <NextLink href={climeAppLink} passHref>
          <Link href={climeAppLink} isExternal h="68px">
            <Image
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
              src="/header-banner-phones.png"
              width={140}
              height={68}
              alt="Clime Mobile App"
            />
          </Link>
        </NextLink>
      </LinkBox>
    </Flex>
  );
};

export default HeaderBanner;
