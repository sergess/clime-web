import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useSWR from 'swr';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';
import { Location } from 'common/types';
import { isLocationValid } from 'common/utils';

import { useLocationDataByCoordinates } from '../use-location-data-by-coordinates.hook';

import { UseLocationDataByIpResponse } from './types';

export const useLocationDataByIp = (): UseLocationDataByIpResponse => {
  const [loadLocationByIp, setLoadLocationByIp] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);

  const locationFromCookies = {
    latitude: Number(Cookies.get(EXACT_LATITUDE_COOKIE)),
    longitude: Number(Cookies.get(EXACT_LONGITUDE_COOKIE)),
  };

  useEffect(() => {
    if (isLocationValid(locationFromCookies)) {
      setLocation(locationFromCookies);
    } else {
      setLoadLocationByIp(true);
    }
  }, []);

  const { data: locationByIp } = useSWR(
    loadLocationByIp ? '/api/utility/location' : null
  );

  useEffect(() => {
    if (isLocationValid(locationByIp)) {
      setLocation(locationByIp);
      setLoadLocationByIp(false);
    }
  }, [locationByIp]);

  const { data: locationData, error } = useLocationDataByCoordinates(location);

  return { locationData, error };
};

export default useLocationDataByIp;
