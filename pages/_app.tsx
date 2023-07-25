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
import { FullScreenAppPromoPopup } from 'client/design-system/molecules/marketing-popup.organism/variants';

import { AppPropsWithLayout } from 'common/types';
import { adSenseScriptLoadingFailedAtom } from 'client/state/atoms';

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

  const Layout = Component.Layout ?? App.DefaultLayout;

  const showAdvertisements = appConfig?.showAdvertisements;

  useInitialSettings();

  return (
    <>
      <Script src="https://try.abtasty.com/372640a057a21dde66a82873bef9094e.js" />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=${process.env.NEXT_PUBLIC_GTM_PREVIEW}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
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
              <Layout {...restPageProps}>
                <Component {...restPageProps} />
              </Layout>

              <FullScreenAppPromoPopup />
            </SWRConfig>
          </ChakraProvider>
        </LocationDataProvider>
      </AppConfigProvider>
    </>
  );
};

App.DefaultLayout = DefaultLayout;

export default appWithTranslation(App);
