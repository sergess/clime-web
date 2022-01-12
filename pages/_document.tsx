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
        </Head>

        <body>
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
