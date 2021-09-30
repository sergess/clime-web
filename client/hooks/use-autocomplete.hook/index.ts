import useSWR from 'swr';
import { useRouter } from 'next/router';

import { UseAutocompleteResponse } from './types';

export const useAutocomplete = (query: string): UseAutocompleteResponse => {
  const router = useRouter();

  const { data, error } = useSWR(
    query && query.length > 1
      ? encodeURI(
          `/api/geocode/autocomplete?query=${query}&language=${
            router.locale || router.defaultLocale
          }`
        )
      : null
  );

  return { data, error };
};

export default useAutocomplete;
