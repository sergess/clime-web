import { ComponentType } from 'react';
import dynamic from 'next/dynamic';

import { ResponsiveBannerProps, ResponsiveBannerId } from './types';

const responsiveBanners: Record<
  ResponsiveBannerId,
  ComponentType<{ wide: boolean }>
> = {
  [ResponsiveBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant')
  ),
  [ResponsiveBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant')
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
