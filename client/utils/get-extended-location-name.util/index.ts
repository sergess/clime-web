import { LocationData } from 'common/types';

import { getLocationName } from '../get-location-name.util';

export const getExtendedLocationName = (
  locationData: LocationData | null
): string => {
  if (!locationData) return '';

  const locationName = getLocationName(locationData);

  return locationData?.district
    ? `${locationData?.district}, ${locationName}`
    : locationName;
};

export default getExtendedLocationName;
