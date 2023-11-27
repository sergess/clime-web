import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Flex, Text, Link, Heading, Grid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';

import { ClimeAppPageLayout } from 'client/design-system/templates';
import { IOS_STORE_LINK } from 'client/constants';

import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';

const ClimeAppPage = (): ReactElement => {
  const { t } = useTranslation(['meta-tags']);
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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Heading
        as="h1"
        color="white"
        fontSize={{ base: '30px', lg: '48px' }}
        lineHeight={{ base: '36px', lg: '60px' }}
        fontWeight="700"
        textAlign={{ base: 'center', lg: 'left' }}
        pt={{ base: '0', lg: '45px' }}
        fontFamily="monserat"
      >
        Your{' '}
        <Text
          color="#2DE886"
          as="span"
          pos="relative"
          fontWeight="800"
          _after={{
            base: {
              content: '" "',
              position: 'absolute',
              bottom: '-4px',
              left: '0',
              width: '150px',
              height: '8px',
              background: 'url("/icons/line.svg") 0 0 no-repeat',
              backgroundSize: 'cover',
            },
            lg: {
              content: '" "',
              position: 'absolute',
              bottom: '-5px',
              left: '-7px',
              width: '240px',
              height: '13px',
              background: 'url("/icons/line.svg")',
            },
          }}
        >
          all-in-one
        </Text>{' '}
        <br /> weather tracker
      </Heading>
      <NextLink href={IOS_STORE_LINK} passHref>
        <Link
          href={IOS_STORE_LINK}
          isExternal
          variant="download"
          maxWidth="320px"
          width={{ base: 'full', lg: '310px' }}
          height={{ base: '64px', lg: '72px' }}
          my={10}
        >
          Download for free
          <Box ps="16px">
            <Image src="/icons/arrow-right.svg" width={16} height={14} alt="" />
          </Box>
        </Link>
      </NextLink>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gridRowGap="24px"
        gridColumnGap="0"
      >
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/сheckmark-icon.svg" layout="fill" alt="" />
          </Box>
          <Text textStyle="16-regular" color="#fff">
            Real-time NOAA radar
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/сheckmark-icon.svg" layout="fill" alt="" />
          </Box>
          <Text textStyle="16-regular" color="#fff">
            14-day hourly weather forecast
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/сheckmark-icon.svg" layout="fill" alt="" />
          </Box>
          <Text textStyle="16-regular" color="#fff">
            Location-based alerts
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/сheckmark-icon.svg" layout="fill" alt="" />
          </Box>
          <Text
            textStyle="16-regular"
            color="#fff"
            whiteSpace={{ base: 'normal', xl: 'nowrap' }}
          >
            Hurricane and lightning trackers
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/сheckmark-icon.svg" layout="fill" alt="" />
          </Box>
          <Text textStyle="16-regular" color="#fff">
            Hourly precipitation forecast
          </Text>
        </Flex>
        <Flex
          sx={{
            gap: '10px',
          }}
        >
          <Box width="24px" height="24px" position="relative">
            <Image src="/icons/plus-icon.svg" layout="fill" alt="" />
          </Box>
          <Text textStyle="16-regular" color="#fff">
            And much more!
          </Text>
        </Flex>
      </Grid>
      <Box mx="-2.5rem" display={{ base: 'block', lg: 'none' }} mt="38px">
        <Image src="/pic-clime-app-mob.png" width={375} height={382} alt="" />
      </Box>
      <NextLink href={IOS_STORE_LINK} passHref>
        <Link href={IOS_STORE_LINK} isExternal width="fit-content" my={10}>
          <Image
            src="/icons/app-store.svg"
            width={143}
            height={48}
            alt="App Store"
          />
        </Link>
      </NextLink>
      <Flex
        justifyContent={{ base: 'center', xl: 'flex-start' }}
        alignItems={{ base: 'center', lg: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Image src="/stars-yellow.png" width={146} height={28} alt="" />
        <Text
          lineHeight="24px"
          fontSize="17px"
          ps={{ base: '0', lg: '1.25rem' }}
          pt="3px"
          color="rgba(255, 255, 255, 0.9)"
        >
          <Text as="span" fontWeight="700">
            1M
          </Text>{' '}
          ratings and counting
        </Text>
      </Flex>
      <Text
        textStyle="14-regular"
        textAlign="center"
        color="rgba(255, 255, 255, 0.75)"
        pt={{ base: '57px', lg: '114px' }}
      >
        Certain features only available with paid subscription.
      </Text>
    </>
  );
};

export default ClimeAppPage;

ClimeAppPage.Layout = ClimeAppPageLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale && (await serverSideTranslations(locale, ['meta-tags']))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
