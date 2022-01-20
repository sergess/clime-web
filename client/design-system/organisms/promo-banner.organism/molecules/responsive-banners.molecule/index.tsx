import React, { ComponentType, FC } from 'react';
import dynamic from 'next/dynamic';

import { ResponsiveBannerId } from './types';

const responsiveBanners: Record<
  ResponsiveBannerId,
  ComponentType<{ wide: boolean; priorityLoad: boolean }>
> = {
  [ResponsiveBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant')
  ),
  [ResponsiveBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant')
  ),
};

export const ResponsiveBanner: FC<{
  bannerId: ResponsiveBannerId;
  wide?: boolean;
  priorityLoad: boolean;
}> = ({ bannerId, priorityLoad, wide = false }): JSX.Element | null => {
  const Component = responsiveBanners[bannerId];

  if (!Component) return null;

  return <Component priorityLoad={priorityLoad} wide={wide} />;
};

export default ResponsiveBanner;
