import { useContext, useEffect } from 'react';

import { LocationDataContext } from 'client/state/contexts';
import { useLocationDataByIp } from 'client/hooks/use-location-data-by-ip.hook';
import { UseSetLocationDataByIpResponse } from './types';

export const useSetLocationDataByIp = (): UseSetLocationDataByIpResponse => {
  const { locationData } = useLocationDataByIp();
  const { setLocationData } = useContext(LocationDataContext);

  useEffect(() => {
    if (locationData) {
      setLocationData(locationData);
    }
  }, [locationData]);

  return { locationData };
};

export default useSetLocationDataByIp;
