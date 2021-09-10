import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { detectLanguageDirection } from 'client/utils';
import { Layout } from 'client/design-system/templates';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { locale } = useRouter();
  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
