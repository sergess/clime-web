import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { AppConfigContext } from 'client/state/contexts';

import { AppPropsWithLayout } from 'common/types';

const App = ({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout): ReactElement => {
  const { locale } = router;
  const {
    locationData = null,
    browserInfo = null,
    ...restPageProps
  } = pageProps;

  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppConfigContext.Provider
      value={{
        locationData,
        browserInfo,
      }}
    >
      <ChakraProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          {getLayout(<Component {...restPageProps} />)}
        </SWRConfig>
      </ChakraProvider>
    </AppConfigContext.Provider>
  );
};

export default appWithTranslation(App);
