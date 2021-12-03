import toUpper from 'ramda/src/toUpper';

import { CountryCode } from 'client/types';

import { LocationData } from 'common/types';

export const getLocationName = (locationData: LocationData | null): string => {
  let locationName = '';

  if (!locationData) return locationName;

  if (locationData?.city) {
    locationName += locationData?.city;
  }

  if (
    locationData?.countryCode?.toLowerCase() === CountryCode.US &&
    locationData?.region
  ) {
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
