import { useRouter } from 'next/router';

import { useLocationData } from '../use-location-data.hook';

export const useUrlSlug = (): string | null => {
  const { query } = useRouter();
  const locationData = useLocationData();

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
