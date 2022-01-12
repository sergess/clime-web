import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import {
  LocationDataProvider,
  ForecastCardsProvider,
  AppConfigProvider,
} from 'client/state/contexts';
import { DefaultLayout } from 'client/design-system/templates';
import { useInitialSettings } from 'client/hooks';

import { AppPropsWithLayout } from 'common/types';

const App = ({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout): ReactElement => {
  const { locale } = router;
  const { locationData, forecastCards = {}, ...restPageProps } = pageProps;

  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  const getLayout = Component.getLayout ?? App.getDefaultLayout;

  useInitialSettings();

  return (
    <AppConfigProvider>
      <ForecastCardsProvider value={forecastCards}>
        <LocationDataProvider value={locationData}>
          <ChakraProvider theme={theme}>
            <SWRConfig value={{ fetcher }}>
              {getLayout(<Component {...restPageProps} />)}
            </SWRConfig>
          </ChakraProvider>
        </LocationDataProvider>
      </ForecastCardsProvider>
    </AppConfigProvider>
  );
};

App.getDefaultLayout = function getDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default appWithTranslation(App);
