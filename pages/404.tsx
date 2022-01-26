import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { AdsenseBanner } from 'client/design-system/organisms';
import { ErrorPageLayout } from 'client/design-system/templates';
import { usePageUrl, useSetLocationDataByIp } from 'client/hooks';
import { WEATHER_TODAY, CLIENT_ID } from 'client/constants';

const NotFoundPage = (): ReactElement => {
  const { t } = useTranslation('page-404');
  const pageUrl = usePageUrl(WEATHER_TODAY);

  const { locationData } = useSetLocationDataByIp();

  return (
    <>
      <Flex
        h="100%"
        w="full"
        direction="column"
        align="center"
        justify="center"
        py="16"
        bgImage="url('/error-page-background.jpg')"
        bgSize="cover"
        bgPosition="center center"
      >
        <Image src="/icons/404.svg" width={180} height={94} alt="404" />
        <Text textStyle="24-bold" my="4">
          {t('Page not found')}
        </Text>
        <Text textStyle="16-medium" align="center">
          {t("There's nothing but wind here. Let's go to the home page.")}
        </Text>
        <Link href={pageUrl} passHref>
          <Button
            variant="cta"
            as="a"
            mt="10"
            fontSize="14px"
            disabled={!locationData}
          >
            {t("Explore today's weather")}
          </Button>
        </Link>
      </Flex>
      <AdsenseBanner client={CLIENT_ID} slot="7916559712" w="full" h="200px" />
    </>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <ErrorPageLayout>{page}</ErrorPageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['common', 'page-404']))),
  },
});
