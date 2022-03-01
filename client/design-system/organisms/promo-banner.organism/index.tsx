import React, { ReactElement, FC } from 'react';
import dynamic from 'next/dynamic';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { BannerType } from './types';
import { useParsedPromoBanner } from './hooks/use-parsed-promo-banner.hook';
import { MarketingBanner } from './molecules/marketing-banners.molecule';
import { ResponsiveBanner } from './molecules/responsive-banners.molecule';

const NativeBanner = dynamic(
  () => import('./molecules/native-banner.molecule')
);

export const PromoBanner: FC<
  { spotId: string; priorityLoad?: boolean } & ComponentDefaultProps
> = ({
  spotId,
  priorityLoad = false,
  ...componentStyles
}): ReactElement | null => {
  const banner = useParsedPromoBanner(spotId);

  if (!banner) return null;

  const { type, id, name } = banner;

  if (type === BannerType.MARKETING) {
    return (
      <MarketingBanner
        bannerId={id}
        banner={name}
        priorityLoad={priorityLoad}
        spotId={spotId}
        {...componentStyles}
      />
    );
  }

  if (type === BannerType.RESPONSIVE) {
    return (
      <ResponsiveBanner
        bannerId={id}
        banner={name}
        priorityLoad={priorityLoad}
        spotId={spotId}
        {...componentStyles}
      />
    );
  }

  if (type === BannerType.NATIVE) {
    return (
      <NativeBanner
        bannerId={id}
        priorityLoad={priorityLoad}
        spotId={spotId}
        banner={name}
        {...componentStyles}
      />
    );
  }

  return null;
};

export default PromoBanner;
