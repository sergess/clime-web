import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { useUpdateAtom, useHydrateAtoms } from 'jotai/utils';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { Layout } from 'client/design-system/templates';
import { forecastFeedAtom } from 'client/state/atoms';
import { ForecastFeed } from 'common/types';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { initialState, ...restPageProps } = pageProps;

  const { locale } = useRouter();
  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  useHydrateAtoms([
    [forecastFeedAtom, initialState?.forecastFeed] as [
      typeof forecastFeedAtom,
      ForecastFeed
    ],
  ]);

  const setForecastFeed = useUpdateAtom(forecastFeedAtom);
  useEffect(() => {
    setForecastFeed(initialState?.forecastFeed);
  }, [initialState]);

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
