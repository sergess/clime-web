import { getLocationName } from 'client/utils';

import { LocationData } from 'common/types';

export const getShortLocationName = (
  locationData: LocationData | null
): string => {
  const name = getLocationName(locationData);

  return name;
};

export default getShortLocationName;
