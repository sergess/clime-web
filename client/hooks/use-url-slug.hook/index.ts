import { useRouter } from 'next/router';

import { useLocationData } from '../use-location-data.hook';

export const useUrlSlug = (): string | null => {
  const { query } = useRouter();
  const locationData = useLocationData();

  return (locationData?.slug || (query?.slug as string)) ?? null;
};

export default useUrlSlug;
