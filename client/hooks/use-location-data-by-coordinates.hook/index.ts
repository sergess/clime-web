import useSWR from 'swr';
import { useRouter } from 'next/router';

import { Location } from 'common/types';

import { UseLocationDataByCoordinates } from './types';

export const useLocationDataByCoordinates = (
  location: Location | null
): UseLocationDataByCoordinates => {
  const router = useRouter();

  const { data, error } = useSWR(
    location
      ? `/api/geocode/reverse?latitude=${location?.latitude}&longitude=${
          location?.longitude
        }&language=${router.locale || router.defaultLocale}`
      : null
  );

  return { data, error };
};

export default useLocationDataByCoordinates;
