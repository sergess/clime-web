import { useRouter } from 'next/router';
import { useAtomValue } from 'jotai/utils';

import { locationDataAtom } from 'client/state/atoms';

export const useUrlSlug = (): string | null => {
  const { query } = useRouter();
  const locationData = useAtomValue(locationDataAtom);

  if (
    (!query?.countryCode && !locationData?.countryCode) ||
    (!query?.city && !locationData?.city) ||
    (!query?.forecastZoneId && !locationData?.forecastZoneId)
  ) {
    return null;
  }

  return `${query?.countryCode || locationData?.countryCode}/${
    query?.city || locationData?.city
  }/${query?.forecastZoneId || locationData?.forecastZoneId}`;
};

export default useUrlSlug;
