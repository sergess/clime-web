import React, { ReactElement, FC } from 'react';
import dynamic from 'next/dynamic';

import { useOptimizeExperimentById } from 'client/hooks';
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
  const experiment = useOptimizeExperimentById(
    'optimize.activate',
    'yb5IGeTcTKGvFpunp6ttSA'
  );

  let spot = spotId;

  if (experiment !== '0') {
    const regexp = /One|Two/g;
    spot = regexp.test(spot) ? `${spot}Test` : spot;
  }

  const banner = useParsedPromoBanner(spot);

  if (!banner || !experiment) return null;

  const { type, id, name } = banner;

  if (type === BannerType.MARKETING) {
    return (
      <MarketingBanner
        bannerId={id}
        banner={name}
        priorityLoad={priorityLoad}
        spotId={spot}
      />
    );
  }

  if (type === BannerType.RESPONSIVE) {
    return (
      <ResponsiveBanner
        bannerId={id}
        banner={name}
        priorityLoad={priorityLoad}
        spotId={spot}
      />
    );
  }

  if (type === BannerType.NATIVE) {
    return (
      <NativeBanner
        bannerId={id}
        priorityLoad={priorityLoad}
        spotId={spot}
        banner={name}
      />
    );
  }

  return null;
};

export default PromoBanner;
