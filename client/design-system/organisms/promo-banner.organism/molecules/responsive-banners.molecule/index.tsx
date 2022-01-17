import React, { ComponentType, ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { Skeleton } from 'client/design-system/organisms/promo-banner.organism/atoms';

import { ResponsiveBannerProps, ResponsiveBannerId } from './types';

const loading = (): ReactElement => <Skeleton h="full" />;

const responsiveBanners: Record<
  ResponsiveBannerId,
  ComponentType<{ wide: boolean }>
> = {
  [ResponsiveBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant'),
    { loading }
  ),
  [ResponsiveBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant'),
    { loading }
  ),
};

export const ResponsiveBanner = ({
  bannerId,
  wide = false,
}: ResponsiveBannerProps): JSX.Element | null => {
  const Component = responsiveBanners[bannerId];

  if (!Component) return null;

  return <Component wide={wide} />;
};

export default ResponsiveBanner;
