import getDistance from 'geolib/es/getDistance';

import { Location } from 'common/types';
import { isLocationValid } from 'common/utils';

export const isLocationACloseToLocationB = (
  locationA: Location,
  locationB: Location,
  meters = 5000
): boolean => {
  if (!isLocationValid(locationA) || !isLocationValid(locationB)) {
    return false;
  }

  const metersAway = getDistance(locationA, locationB);

  return metersAway <= meters;
};

export default isLocationACloseToLocationB;
