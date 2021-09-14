import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { Layout } from 'client/design-system/templates';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { locale } = useRouter();
  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
