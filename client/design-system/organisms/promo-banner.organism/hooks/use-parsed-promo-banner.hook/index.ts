import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';

import { ParsedPromoBanner } from './types';

export const useParsedPromoBanner = (
  spotId: string | number
): ParsedPromoBanner | null => {
  const { listOfBanners } = useAppConfig();

  if (!listOfBanners) return null;

  const config: Record<string, string> = JSON.parse(listOfBanners.toString());

  const banner = config[spotId];

  if (!banner) return null;

  const [type, id] = banner.split('_');

  return { type, id: Number(id) };
};

export default useParsedPromoBanner;
