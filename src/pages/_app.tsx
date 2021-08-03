/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';

import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default appWithTranslation(App);
