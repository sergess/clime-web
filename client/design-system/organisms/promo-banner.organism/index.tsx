import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { Skeleton } from './atoms';
import { BannerType, PromoBannerProps } from './types';
import { useParsedPromoBanner } from './hooks/use-parsed-promo-banner.hook';
import { MarketingBanner } from './molecules/marketing-banners.molecule';
import { ResponsiveBanner } from './molecules/responsive-banners.molecule';

const NativeBanner = dynamic(
  () => import('./molecules/native-banner.molecule'),
  {
    loading: () => <Skeleton minH={340} />,
  }
);

export const PromoBanner = ({
  spotId,
}: PromoBannerProps): ReactElement | null => {
  const banner = useParsedPromoBanner(spotId);

  if (!banner) return <Skeleton />;

  const { type, id } = banner;

  if (type === BannerType.MARKETING) {
    return <MarketingBanner bannerId={id} />;
  }

  if (type === BannerType.RESPONSIVE) {
    return <ResponsiveBanner bannerId={id} />;
  }

  if (type === BannerType.NATIVE) {
    return <NativeBanner bannerId={id} />;
  }

  return null;
};

export default PromoBanner;
