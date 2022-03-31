import React, { ReactElement, FC } from 'react';
import dynamic from 'next/dynamic';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { useOptimizeExperimentById } from 'client/hooks';
import {
  DEFAULT_EXPERIMENT_EVENT_NAME,
  BANNERS_STYLE_EXPERIMENT_ID,
} from 'client/hooks/use-optimize-experiment-by-id.hook/constants';
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
  const experiment = useOptimizeExperimentById(
    DEFAULT_EXPERIMENT_EVENT_NAME,
    BANNERS_STYLE_EXPERIMENT_ID
  );

  let spot = spotId;

  if (experiment && experiment !== '0') {
    const regexp = /One|Two/g;
    spot = regexp.test(spot) ? `${spot}Test` : spot;
  }

  const banner = useParsedPromoBanner(spot);

  if (!banner) return null;

  const { type, id, name } = banner;

  if (type === BannerType.MARKETING) {
    return (
      <MarketingBanner
        bannerId={id}
        banner={name}
        priorityLoad={priorityLoad}
        spotId={spot}
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
        spotId={spot}
        {...componentStyles}
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
        {...componentStyles}
      />
    );
  }

  return null;
};

export default PromoBanner;
