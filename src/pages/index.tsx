import { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): ReactElement {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('Clime Web App')}</title>
      </Head>
      <main>
        <h1>{t('Hello')}</h1>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(!!locale &&
      (await serverSideTranslations(locale, ['common', 'footer']))),
  },
});
