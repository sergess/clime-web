import { GetServerSidePropsContext } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// [TODO] move namespaces to constants
export const withTranslations =
  (...namespaces: string[]) =>
  async (context: GetServerSidePropsContext): Promise<SSRConfig> => {
    const { locale, defaultLocale } = context;
    const language = locale || (defaultLocale as string);
    const translations = await serverSideTranslations(language, [
      'common',
      ...namespaces,
    ]);

    return translations;
  };

export default withTranslations;
