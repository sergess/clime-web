import { NextPage } from 'next';
import { ElementType } from 'react';

export type NextPageWithLayout = NextPage & {
  Layout?: ElementType;
};

export default NextPageWithLayout;
