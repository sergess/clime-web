import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toUpper from 'ramda/src/toUpper';

import {
  isLocationTheSameAsLocationFromBrowser,
  getExtendedLocationName,
  getLocationName,
  capitalize,
} from 'client/utils';

import { useLocationData } from '../use-location-data.hook';

import { UseLocationMetaInfo } from './types';

export const useLocationMetaInfo = (): UseLocationMetaInfo => {
  const { query } = useRouter();
  const [exact, setExact] = useState(false);
  const [name, setName] = useState('');

  const locationData = useLocationData();

  useEffect(() => {
    const locationTheSameAsLocationFromBrowser =
      !!locationData &&
      isLocationTheSameAsLocationFromBrowser({
        longitude: locationData.longitude,
        latitude: locationData.latitude,
      });

    setExact(locationTheSameAsLocationFromBrowser);

    const nextLocationName = locationTheSameAsLocationFromBrowser
      ? getExtendedLocationName(locationData)
      : getLocationName(locationData);

    setName(
      nextLocationName ||
        `${capitalize((query?.city as string) ?? '')}, ${toUpper(
          (query?.countryCode as string) ?? ''
        )}`
    );
  }, [locationData, query]);

  return {
    exact,
    name,
  };
};

export default useLocationMetaInfo;
