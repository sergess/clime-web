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
  const { t } = useTranslation(['clime-app', 'meta-tags']);
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
        {t('Please try again from your mobile device, or download Clime.')}
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
        display={{ base: 'none', lg: 'flex' }}
        pt="10"
        alignItems="center"
        flexDirection="row"
      >
        <Flex
          flex="none"
          p={2.5}
          borderRadius="12px"
          border="2px solid rgba(45, 232, 134, 0.2)"
          maxW="auto"
        >
          <Image
            src="/icons/qr-code.svg"
            width={150}
            height={150}
            priority
            alt="QR"
          />
        </Flex>
        <Box ps="8" textAlign="left" pt="0">
          <Trans i18nKey="scanTheQRCode" t={t}>
            <Text
              color="#2DE886"
              fontSize="24px"
              lineHeight="32px"
              fontWeight="600"
            >
              Scan the QR code
            </Text>
            <Text
              color="white"
              fontSize="24px"
              lineHeight="32px"
              fontWeight="500"
            >
              with your device to download
              <br /> the Clime mobile app.
            </Text>
          </Trans>
        </Box>
      </Flex>
    </>
  );
};

export default GetApplicationPage;

GetApplicationPage.Layout = GetApplicationPageLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['clime-app', 'meta-tags']))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
