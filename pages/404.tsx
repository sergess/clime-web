import React, { ReactElement, useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Logo404Icon } from 'client/design-system/atoms';
import { NotFoundPageLayout } from 'client/design-system/templates';
import { useLocationDataByIp, usePageUrl } from 'client/hooks';
import { WEATHER_TODAY } from 'client/constants';
import { LocationDataContext } from 'client/state/contexts';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { setLocationData } = useContext(LocationDataContext);
  const { locationData } = useLocationDataByIp();
  const pageUrl = usePageUrl(WEATHER_TODAY);

  useEffect(() => {
    if (locationData) {
      setLocationData(locationData);
    }
  }, [locationData]);

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
        <Logo404Icon w="180px" h="94px" />
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
