import React, { ComponentType, ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { Skeleton } from 'client/design-system/organisms/promo-banner.organism/atoms';

import { MarketingBannerProps, MarketingBannerId } from './types';

const loading = (): ReactElement => <Skeleton />;

const marketingBanners: Record<
  MarketingBannerId,
  ComponentType<ComponentDefaultProps>
> = {
  [MarketingBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerThree]: dynamic(
    () => import('./variants/third.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerFour]: dynamic(
    () => import('./variants/fourth.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerFife]: dynamic(
    () => import('./variants/fifth.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerSix]: dynamic(
    () => import('./variants/sixth.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerSeven]: dynamic(
    () => import('./variants/seventh.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerEight]: dynamic(
    () => import('./variants/eight.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerNine]: dynamic(
    () => import('./variants/ninth.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerTen]: dynamic(
    () => import('./variants/tenth.variant'),
    { loading }
  ),
  [MarketingBannerId.bannerEleven]: dynamic(
    () => import('./variants/eleventh.variant'),
    { loading }
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
