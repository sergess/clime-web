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
import { serverForecastFeedAtom, locationDataAtom } from 'client/state/atoms';
import { ForecastFeed, LocationData } from 'common/types';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { initialState, ...restPageProps } = pageProps;

  const { locale } = useRouter();
  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  useHydrateAtoms([
    [serverForecastFeedAtom, initialState?.forecastFeed] as [
      typeof serverForecastFeedAtom,
      ForecastFeed
    ],
    [locationDataAtom, initialState?.locationData] as [
      typeof locationDataAtom,
      LocationData
    ],
  ]);

  const setServerForecastFeed = useUpdateAtom(serverForecastFeedAtom);
  const setLocationData = useUpdateAtom(locationDataAtom);

  useEffect(() => {
    setServerForecastFeed(initialState?.forecastFeed);
    setLocationData(initialState?.locationData);
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
