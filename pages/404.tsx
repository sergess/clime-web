import { GetStaticProps } from 'next';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Logo404Icon } from 'client/design-system/atoms';
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'client/constants';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Flex
      h={{
        base: `calc(100% - ${MOBILE_HEADER_HEIGHT}px)`,
        md: `calc(100% - ${DESKTOP_HEADER_HEIGHT}px)`,
      }}
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
      <Button variant="cta" as="a" href="/" mt="10" fontSize="14px">
        {t("Explore today's weather")}
      </Button>
    </Flex>
  );
};

export default NotFoundPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['page-404', 'footer', 'header']))),
  },
});
