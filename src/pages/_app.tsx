/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';

import { ReactElement } from 'react';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(App);
