import React, { ComponentType, FC } from 'react';
import dynamic from 'next/dynamic';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { ResponsiveBannerId } from './types';

const responsiveBanners: Record<
  ResponsiveBannerId,
  ComponentType<
    { wide: boolean; priorityLoad: boolean } & ComponentDefaultProps
  >
> = {
  [ResponsiveBannerId.bannerOne]: dynamic(
    () => import('./variants/first.variant')
  ),
  [ResponsiveBannerId.bannerTwo]: dynamic(
    () => import('./variants/second.variant')
  ),
};

export const ResponsiveBanner: FC<
  {
    bannerId: ResponsiveBannerId;
    wide?: boolean;
    priorityLoad: boolean;
    spotId: string | number;
  } & ComponentDefaultProps
> = ({
  bannerId,
  priorityLoad,
  wide = false,
  spotId,
  ...componentStyles
}): JSX.Element | null => {
  const Component = responsiveBanners[bannerId];

  if (!Component) return null;

  return (
    <Component
      priorityLoad={priorityLoad}
      wide={wide}
      data-banner-id={bannerId}
      data-spot-name={spotId}
      className="banner"
      {...componentStyles}
    />
  );
};

export default ResponsiveBanner;
