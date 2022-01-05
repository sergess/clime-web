import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useClimeAppLink } from 'client/hooks';

export const HeaderBanner = (): ReactElement => {
  const { t } = useTranslation('banners');
  const climeAppLink = useClimeAppLink();
  return (
    <LinkBox display="flex" w="full" maxW="400px" justifyContent="flex-end">
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
      <Image
        src="/header-banner-phones.png"
        width={140}
        height={68}
        priority
        alt="Clime Mobile App"
      />
    </LinkBox>
  );
};

export default HeaderBanner;
