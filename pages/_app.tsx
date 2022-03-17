import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import Script from 'next/script';
import { useUpdateAtom } from 'jotai/utils';

import climeTheme from 'client/theme';
import { detectLanguageDirection, fetcher } from 'client/utils';
import { LocationDataProvider, AppConfigProvider } from 'client/state/contexts';
import { DefaultLayout } from 'client/design-system/templates';
import { useInitialSettings } from 'client/hooks';

import { AppPropsWithLayout } from 'common/types';
import { adSenseScriptLoadingFailedAtom } from 'client/state/atoms';
import dynamic from 'next/dynamic';

const MarketingPopups = dynamic(
  () => import('client/design-system/organisms/marketing-popups.organism'),
  {
    ssr: false,
  }
);

const App = ({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout): ReactElement => {
  const setLoadingFailed = useUpdateAtom(adSenseScriptLoadingFailedAtom);

  const { locale } = router;
  const { appConfig, locationData, ...restPageProps } = pageProps;

  const direction = detectLanguageDirection(locale);
  const theme = extendTheme(climeTheme, { direction });

  const getLayout = Component.getLayout ?? App.getDefaultLayout;

  const showAdvertisements = appConfig?.showAdvertisements;

  useInitialSettings();

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
            function gtag(){dataLayer.push(arguments);}
          `,
        }}
      />
      {showAdvertisements && (
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          onError={() => {
            setLoadingFailed(true);
          }}
        />
      )}
      <AppConfigProvider value={appConfig}>
        <LocationDataProvider value={locationData}>
          <ChakraProvider theme={theme}>
            <SWRConfig value={{ fetcher }}>
              {getLayout(<Component {...restPageProps} />)}

              <MarketingPopups />
            </SWRConfig>
          </ChakraProvider>
        </LocationDataProvider>
      </AppConfigProvider>
    </>
  );
};

App.getDefaultLayout = function getDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default appWithTranslation(App);
