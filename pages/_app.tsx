import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { useUpdateAtom } from 'jotai/utils';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { Layout } from 'client/design-system/templates';
import { forecastFeedAtom } from 'client/state/atoms';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { initialState, ...restPageProps } = pageProps;

  const { locale } = useRouter();
  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  // We fetch forecast feed on each route. So we need to update it each time url is changed.
  const setForecastFeed = useUpdateAtom(forecastFeedAtom);
  setForecastFeed(initialState?.forecastFeed ?? null);

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...restPageProps} />
        </Layout>
      </SWRConfig>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
