import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';

import { BaseNativeBanner } from './molecules';
import { NativeBannerId, NativeBannerProps } from './types';

export const NativeBanner = ({
  bannerId,
}: NativeBannerProps): ReactElement | null => {
  const { t } = useTranslation('banners');

  switch (bannerId) {
    case NativeBannerId.bannerOne:
      return (
        <BaseNativeBanner
          heading={t('Hurricane Tracker')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_1.jpg')" }}
        />
      );
    case NativeBannerId.bannerTwo:
      return (
        <BaseNativeBanner
          heading={t('Fires and Hotspots Map')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_2.jpg')" }}
        />
      );
    case NativeBannerId.bannerThree:
      return (
        <BaseNativeBanner
          heading={t('Fires and Hotspots Map')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_3.jpg')" }}
        />
      );
    case NativeBannerId.bannerFour:
      return (
        <BaseNativeBanner
          heading={t('Lightning Tracker')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_4.jpg')" }}
        />
      );
    case NativeBannerId.bannerFife:
      return (
        <BaseNativeBanner
          heading={t('Advanced Precipitation Forecast Map')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_5.jpg')" }}
        />
      );
    case NativeBannerId.bannerSix:
      return (
        <BaseNativeBanner
          heading={t('Temperature Forecast Map')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_6.jpg')" }}
        />
      );
    case NativeBannerId.bannerSeven:
      return (
        <BaseNativeBanner
          heading={t('RainScope')}
          buttonText={t('Get Clime App')}
          bannerStyles={{ bgImage: "url('/img_7.jpg')" }}
        />
      );
    default:
      return null;
  }
};

export default NativeBanner;
