import { getLocationName } from 'client/utils';

import { LocationData } from 'common/types';

export const getFullLocationName = (
  locationData: LocationData | null
): string => {
  const name = getLocationName(locationData);

  return locationData?.district ? `${locationData?.district}, ${name}` : name;
};

export default getFullLocationName;
