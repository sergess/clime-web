import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { Layout } from 'client/design-system/templates';
import { AppConfigContext } from 'client/state/contexts';

const App = ({ Component, pageProps, router }: AppProps): ReactElement => {
  const { locale } = router;
  const {
    locationData = null,
    browserInfo = null,
    ...restPageProps
  } = pageProps;

  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  return (
    <AppConfigContext.Provider
      value={{
        locationData,
        browserInfo,
      }}
    >
      <ChakraProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component {...restPageProps} />
          </Layout>
        </SWRConfig>
      </ChakraProvider>
    </AppConfigContext.Provider>
  );
};

export default appWithTranslation(App);
