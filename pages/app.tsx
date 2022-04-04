import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Flex, Text, Link, Heading } from '@chakra-ui/react';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';

import { AppPageLayout } from 'client/design-system/templates';
import { ANDROID_STORE_LINK, IOS_STORE_LINK } from 'client/constants';

import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';

const AppPage = (): ReactElement => {
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
        pb={{ base: '5', lg: '10' }}
        pt={14}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <Image
          src="/icons/clime-logo-white.svg"
          width={280}
          height={62}
          priority
          alt="Clime"
        />
      </Flex>
      <Trans i18nKey="preciseWeather" t={t}>
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '30px', lg: '52px' }}
          lineHeight={{ base: '42px', lg: '64px' }}
          fontWeight="600"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Precise weather,
          <Text
            fontSize={{ base: '28px', lg: '48px' }}
            color="#2DE886"
            as="span"
            pos="relative"
            _after={{
              lg: {
                content: '" "',
                position: 'absolute',
                bottom: '-17px',
                left: '-20px',
                width: '240px',
                height: '13px',
                background: 'url("/icons/line.svg")',
              },
            }}
          >
            precisely
          </Text>
          <Text as="span" fontSize={{ base: '28px', lg: '48px' }}>
            for you
          </Text>
        </Heading>
      </Trans>
      <Flex
        pt={{ base: '10', lg: '14' }}
        alignItems={{ base: 'center', lg: 'flex-end' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Flex
          flex="none"
          p={2.5}
          borderRadius="12px"
          border="2px solid rgba(45, 232, 134, 0.2)"
          maxW={{ base: '30%', lg: 'auto' }}
        >
          <Image
            src="/icons/qr-code.svg"
            width={150}
            height={150}
            priority
            alt="QR"
          />
        </Flex>
        <Box
          ps={{ base: '0', lg: '8' }}
          textAlign={{ base: 'center', lg: 'left' }}
          pt={{ base: '4', lg: '0' }}
        >
          <Trans i18nKey="scanTheQRCode" t={t}>
            <Text
              color="#2DE886"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '24px', lg: '32px' }}
              fontWeight="600"
            >
              Scan the QR code
            </Text>
            <Text
              color="#FFFFFF"
              fontSize={{ base: '14px', lg: '24px' }}
              lineHeight={{ base: '24px', lg: '32px' }}
              fontWeight="500"
            >
              with your device to download
              <br /> the Clime mobile app.
            </Text>
          </Trans>
          <Box pt={5}>
            <NextLink href={IOS_STORE_LINK} passHref>
              <Link
                href={IOS_STORE_LINK}
                isExternal
                me={{ base: '2', lg: '5' }}
              >
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
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AppPage;

AppPage.getLayout = function getLayout(page: ReactElement) {
  return <AppPageLayout>{page}</AppPageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['clime-app', 'meta-tags']))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
