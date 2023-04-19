import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';

import { StormSurvivalKitPageLayout } from 'client/design-system/templates';
import { ANDROID_STORE_LINK, IOS_STORE_LINK } from 'client/constants';

import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';

const StormSurvivalKitPage = (): ReactElement => {
  const { t } = useTranslation(['clime-app', 'meta-tags', 'common']);
  return (
    <>
      <Head>
        <title>
          {t('Survival kit & storm prep for emergency weather | Clime')}
        </title>
        <meta
          name="description"
          content={t(
            'Ensure your storm survival kit is complete with these essential items. Then download Clime for hyper-local weather alerts and severe weather tracking.'
          )}
        />
      </Head>
      <Flex
        mx="auto"
        mb={{ base: '10', lg: '60px' }}
        w={{ base: '171px', md: '224px' }}
        h={{ base: '38px', md: '50px' }}
        position="relative"
      >
        <Image
          src="/icons/clime-logo-white.svg"
          layout="fill"
          priority
          alt="Clime"
        />
      </Flex>
      <Box maxW="720" mx="auto">
        <Text
          color="white"
          fontSize={{ base: '20px', lg: '32px' }}
          lineHeight={{ base: '24px', lg: '40px' }}
          fontWeight="700"
          textAlign="center"
        >
          {t('Storm preparedness: Essential items for your survival kit')}
        </Text>
      </Box>
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
                alt={t('RainScope: min-by-min precip outlook')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('RainScope: min-by-min precip outlook')}
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
                alt={t('Fires and hotspots map')}
              />
            </Box>
            <Text
              color="white"
              fontSize={14}
              lineHeight="14px"
              fontWeight="600"
            >
              {t('Fires and hotspots map')}
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

export default StormSurvivalKitPage;

StormSurvivalKitPage.Layout = StormSurvivalKitPageLayout;

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
