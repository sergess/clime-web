import React, { ReactElement, FC } from 'react';
import { useTranslation } from 'next-i18next';
import { ComponentDefaultProps } from '@chakra-ui/react';

import { BaseNativeBanner } from './molecules';
import { NativeBannerId } from './types';

export const NativeBanner: FC<
  {
    bannerId: NativeBannerId;
    priorityLoad: boolean;
    spotId: string | number;
  } & ComponentDefaultProps
> = ({
  bannerId,
  priorityLoad,
  spotId,
  ...componentStyles
}): ReactElement | null => {
  const { t } = useTranslation('banners');

  switch (bannerId) {
    case NativeBannerId.bannerOne:
      return (
        <BaseNativeBanner
          heading={t('Hurricane Tracker')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_1.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerTwo:
      return (
        <BaseNativeBanner
          heading={t('Fires and Hotspots Map')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_2.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerThree:
      return (
        <BaseNativeBanner
          heading={t('Fires and Hotspots Map')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_3.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerFour:
      return (
        <BaseNativeBanner
          heading={t('Lightning Tracker')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_4.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerFive:
      return (
        <BaseNativeBanner
          heading={t('Advanced Precipitation Forecast Map')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_5.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerSix:
      return (
        <BaseNativeBanner
          heading={t('Temperature Forecast Map')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_6.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    case NativeBannerId.bannerSeven:
      return (
        <BaseNativeBanner
          heading={t('RainScope')}
          buttonText={t('Get Clime App')}
          backgroundSrc="/img_7.jpg"
          priorityLoad={priorityLoad}
          bannerId={bannerId}
          spotId={spotId}
          {...componentStyles}
        />
      );
    default:
      return null;
  }
};

export default NativeBanner;
