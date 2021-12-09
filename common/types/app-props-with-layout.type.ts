import { AppProps } from 'next/app';
import { NextPageWithLayout } from 'common/types/next-page-with-layout.type';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default AppPropsWithLayout;
