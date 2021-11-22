import toUpper from 'ramda/src/toUpper';

import { CountryCode, LocationDataFromApi } from 'server/types';

export const getLocationName = (
  locationData: LocationDataFromApi | null
): string => {
  let locationName = '';

  if (!locationData) return locationName;

  if (locationData?.city) {
    locationName += locationData?.city;
  }

  if (locationData?.countryCode === CountryCode.US && locationData?.region) {
    return `${locationName}, ${toUpper(locationData?.region)}`;
  }

  if (locationData?.country) {
    return `${locationName}, ${locationData?.country}`;
  }

  if (locationData?.countryCode) {
    return `${locationName}, ${toUpper(locationData?.countryCode)}`;
  }

  return locationName;
};

export default getLocationName;
