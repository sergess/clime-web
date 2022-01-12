import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';

import { ErrorPageLayout } from 'client/design-system/templates';
import { usePageUrl, useSetLocationDataByIp } from 'client/hooks';
import { WEATHER_TODAY } from 'client/constants';

const InternalServerErrorPage = () => {
  const { t } = useTranslation('page-500');

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
        <Image src="/icons/500.svg" width={180} height={94} alt="500" />
        <Text textStyle="24-bold" mt="7">
          {t('Internal Server Error')}
        </Text>
        <Text textStyle="16-medium" align="center" mt="4">
          {t('Something went wrong')}
        </Text>
        <Link href={pageUrl} passHref>
          <Button
            variant="cta"
            mt="14"
            fontSize="14px"
            minW="280px"
            disabled={!locationData}
            as="a"
          >
            {t("Explore today's weather")}
          </Button>
        </Link>
      </Flex>
      <Box bg="gray.300" w="full" h="200px">
        ads
      </Box>
    </>
  );
};

export default InternalServerErrorPage;

InternalServerErrorPage.getLayout = function getLayout(page: ReactElement) {
  return <ErrorPageLayout>{page}</ErrorPageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['common', 'page-500']))),
  },
});
