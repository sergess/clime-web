import React, { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { ComponentDefaultProps, Skeleton } from '@chakra-ui/react';

import { MarketingBannerProps, MarketingBannerId } from './types';

const marketingBanners: Record<
  MarketingBannerId,
  ComponentType<ComponentDefaultProps>
> = {
  [MarketingBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerThree]: dynamic(
    () => import('./variants/third.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerFour]: dynamic(
    () => import('./variants/fourth.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerFife]: dynamic(
    () => import('./variants/fifth.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerSix]: dynamic(
    () => import('./variants/sixth.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerSeven]: dynamic(
    () => import('./variants/seventh.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerEight]: dynamic(
    () => import('./variants/eight.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerNine]: dynamic(
    () => import('./variants/ninth.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerTen]: dynamic(
    () => import('./variants/tenth.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
  [MarketingBannerId.bannerEleven]: dynamic(
    () => import('./variants/eleventh.variant'),
    {
      loading: () => <Skeleton h="full" w="full" />,
    }
  ),
};

export const MarketingBanner = ({
  bannerId,
}: MarketingBannerProps): JSX.Element | null => {
  const Component = marketingBanners[bannerId];

  if (!Component) return null;

  return <Component />;
};

export default MarketingBanner;
