import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Flex, Text, Link, Heading } from '@chakra-ui/react';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';

import { GetApplicationPageLayout } from 'client/design-system/templates';
import { ANDROID_STORE_LINK, IOS_STORE_LINK } from 'client/constants';

import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';

const GetApplicationPage = (): ReactElement => {
  const { t } = useTranslation(['clime-app', 'meta-tags', 'common']);
  return (
    <>
      <Head>
        <title>{t('Weather Radar App | Clime')}</title>
        <meta
          name="description"
          content={t(
            'Consider Clime your personal weather assistant with hourly weather, local radar and precip forecast maps, hurricane and wildfire tracking – all in one app.'
          )}
        />
      </Head>
      <Flex
        mx={{ base: 'auto', lg: '0' }}
        mb={{ base: '10', lg: '10' }}
        mt="4"
        w={{ base: '171px', md: '280px' }}
        h={{ base: '38px', md: '62px' }}
        position="relative"
      >
        <Image
          src="/icons/clime-logo-white.svg"
          layout="fill"
          priority
          alt="Clime"
        />
      </Flex>
      <Trans i18nKey="youNeedApp" t={t}>
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '32px', lg: '48px' }}
          lineHeight={{ base: '40px', lg: '56px' }}
          fontWeight="600"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          You need the
          <Text color="#2DE886" as="span">
            &nbsp;Clime&nbsp;
          </Text>
          app to open this link
        </Heading>
      </Trans>
      <Text
        color="white"
        fontSize={{ base: '20px', lg: '24px' }}
        lineHeight={{ base: '24px', lg: '32px' }}
        fontWeight="500"
        textAlign={{ base: 'center', lg: 'left' }}
        pt={{ base: '6', lg: '5' }}
      >
        {t(
          'The Clime app delivers essential weather data and timely alerts to your device. Check it out!'
        )}
      </Text>
      <Flex
        pt={{ base: '8', lg: '5' }}
        justify={{ base: 'center', lg: 'flex-start' }}
      >
        <NextLink href={IOS_STORE_LINK} passHref>
          <Link href={IOS_STORE_LINK} isExternal me="5">
            <Image
              src="/icons/app-store.svg"
              width={143}
              height={48}
              alt="App Store"
            />
          </Link>
        </NextLink>
        <NextLink href={ANDROID_STORE_LINK} passHref>
          <Link href={ANDROID_STORE_LINK} isExternal>
            <Image
              src="/icons/google-play.svg"
              width={162}
              height={48}
              alt="Google Play"
            />
          </Link>
        </NextLink>
      </Flex>
      <Flex
        mt={10}
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection={{ base: 'column', lg: 'row' }}
        w="fit-content"
        mx={{ base: 'auto', lg: '0' }}
      >
        <Flex flexDirection="column" pe={{ base: '0', lg: '6' }}>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_map.svg"
                layout="fill"
                alt={t('Advanced precipitation forecast map')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Advanced precipitation forecast map')}
            </Text>
          </Flex>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_hurricane.svg"
                layout="fill"
                alt={t('Hurricane tracker')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Hurricane tracker')}
            </Text>
          </Flex>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_lightning.svg"
                layout="fill"
                alt={t('Lightning tracker')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Lightning tracker')}
            </Text>
          </Flex>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_rainscope.svg"
                layout="fill"
                alt={t('RainScope (minute-by-minute precipitation)')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('RainScope (minute-by-minute precipitation)')}
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_14day.svg"
                layout="fill"
                alt={t('14-day hourly forecast')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('14-day hourly forecast')}
            </Text>
          </Flex>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic_wildfires.svg"
                layout="fill"
                alt={t('Fire and Hotspot Map')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Fire and Hotspot Map')}
            </Text>
          </Flex>
          <Flex align="center" mb={3.5}>
            <Box me={2.5} boxSize="6" pos="relative">
              <Image
                src="/icons/ic-aqi.svg"
                layout="fill"
                alt={t('Air quality index')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Air quality index')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default GetApplicationPage;

GetApplicationPage.Layout = GetApplicationPageLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, [
        'clime-app',
        'meta-tags',
        'common',
      ]))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
