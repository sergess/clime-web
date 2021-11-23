import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { NotFoundPageLayout } from 'client/design-system/templates';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Flex
        h="100%"
        w="full"
        direction="column"
        align="center"
        justify="center"
        py="16"
        bgImage="url('/bg-map.png')"
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
        <Button variant="cta" as="a" href="/" mt="10" fontSize="14px">
          {t("Explore today's weather")}
        </Button>
      </Flex>
      <Box bg="gray.300" w="full" h="200px">
        ads
      </Box>
    </>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <NotFoundPageLayout>{page}</NotFoundPageLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['common', 'page-404']))),
  },
});
