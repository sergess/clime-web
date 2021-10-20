import { useContext } from 'react';

import { AppConfigContext } from 'client/state/contexts';

import { LocationData } from 'common/types';

export const useLocationData = (): LocationData | null => {
  const { locationData } = useContext(AppConfigContext);

  return locationData;
};

export default useLocationData;
