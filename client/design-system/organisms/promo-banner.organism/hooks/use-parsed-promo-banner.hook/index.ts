import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';

import { ParsedPromoBanner } from './types';

export const useParsedPromoBanner = (
  spotId: string | number
): ParsedPromoBanner | null => {
  const appConfig = useAppConfig();

  if (!appConfig) return null;

  const banner = appConfig.listOfBanners[spotId];

  if (!banner) return null;

  const [type, id] = banner.split('_');

  return { type, id: Number(id), name: banner };
};

export default useParsedPromoBanner;
