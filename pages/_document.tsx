/* eslint-disable react/jsx-props-no-spreading */
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { detectLanguageDirection } from 'client/utils';

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    // eslint-disable-next-line no-underscore-dangle
    const { locale } = this.props.__NEXT_DATA__;
    const direction = detectLanguageDirection(locale);

    return (
      <Html dir={direction}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="dns-prefetch" href="http://www.googletagmanager.com/" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
          <link rel="dns-prefetch" href="https://cdn.cookielaw.org/" />
          <meta
            name="apple-itunes-app"
            content="app-id=749133753, app-argument=https://itunes.apple.com/us/app/id749133753"
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=${process.env.NEXT_PUBLIC_GTM_PREVIEW}&gtm_cookies_win=x`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager (noscript)"
            />
          </noscript>
          <ColorModeScript
            initialColorMode={climeTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
