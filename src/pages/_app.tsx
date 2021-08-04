/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';

import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';

import climeTheme from 'src/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <ChakraProvider theme={climeTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default appWithTranslation(App);
