import React, { ComponentType, FC } from 'react';
import dynamic from 'next/dynamic';

import { MarketingBannerId } from './types';

const marketingBanners: Record<
  MarketingBannerId,
  ComponentType<{ priorityLoad: boolean }>
> = {
  [MarketingBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant')
  ),
  [MarketingBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant')
  ),
  [MarketingBannerId.bannerThree]: dynamic(
    () => import('./variants/third.variant')
  ),
  [MarketingBannerId.bannerFour]: dynamic(
    () => import('./variants/fourth.variant')
  ),
  [MarketingBannerId.bannerFive]: dynamic(
    () => import('./variants/fifth.variant')
  ),
  [MarketingBannerId.bannerSix]: dynamic(
    () => import('./variants/sixth.variant')
  ),
  [MarketingBannerId.bannerSeven]: dynamic(
    () => import('./variants/seventh.variant')
  ),
  [MarketingBannerId.bannerEight]: dynamic(
    () => import('./variants/eight.variant')
  ),
  [MarketingBannerId.bannerNine]: dynamic(
    () => import('./variants/ninth.variant')
  ),
  [MarketingBannerId.bannerTen]: dynamic(
    () => import('./variants/tenth.variant')
  ),
  [MarketingBannerId.bannerEleven]: dynamic(
    () => import('./variants/eleventh.variant')
  ),
};

export const MarketingBanner: FC<{
  bannerId: MarketingBannerId;
  priorityLoad: boolean;
}> = ({ bannerId, priorityLoad }): JSX.Element | null => {
  const Component = marketingBanners[bannerId];

  if (!Component) return null;

  return <Component priorityLoad={priorityLoad} />;
};

export default MarketingBanner;
