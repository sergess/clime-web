import { useContext } from 'react';

import { LocationDataContext } from 'client/state/contexts';

import { LocationData } from 'common/types';

export const useLocationData = (): LocationData | null => {
  const { locationData } = useContext(LocationDataContext);

  return locationData;
};

export default useLocationData;
