import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@chakra-ui/react';

import { ResponsiveBannerProps, ResponsiveBannerId } from './types';

const responsiveBanners: Record<
  ResponsiveBannerId,
  ComponentType<{ wide: boolean }>
> = {
  [ResponsiveBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [ResponsiveBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
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
