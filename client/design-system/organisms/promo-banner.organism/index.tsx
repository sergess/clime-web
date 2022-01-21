import React, { ReactElement, FC } from 'react';
import dynamic from 'next/dynamic';

import { BannerType } from './types';
import { useParsedPromoBanner } from './hooks/use-parsed-promo-banner.hook';
import { MarketingBanner } from './molecules/marketing-banners.molecule';
import { ResponsiveBanner } from './molecules/responsive-banners.molecule';

const NativeBanner = dynamic(
  () => import('./molecules/native-banner.molecule')
);

export const PromoBanner: FC<{ spotId: string; priorityLoad?: boolean }> = ({
  spotId,
  priorityLoad = false,
}): ReactElement | null => {
  const banner = useParsedPromoBanner(spotId);

  if (!banner) return null;

  const { type, id } = banner;

  if (type === BannerType.MARKETING) {
    return (
      <MarketingBanner
        bannerId={id}
        priorityLoad={priorityLoad}
        spotId={spotId}
      />
    );
  }

  if (type === BannerType.RESPONSIVE) {
    return (
      <ResponsiveBanner
        bannerId={id}
        priorityLoad={priorityLoad}
        spotId={spotId}
      />
    );
  }

  if (type === BannerType.NATIVE) {
    return (
      <NativeBanner bannerId={id} priorityLoad={priorityLoad} spotId={spotId} />
    );
  }

  return null;
};

export default PromoBanner;
