import { LocationData } from 'common/types';

import { getLocationName } from 'server/utils';
import { LocationDataFromApi } from 'server/types';

export const mapLocationData = (
  locationData: LocationDataFromApi,
  exact = false
): LocationData => ({
  ...locationData,
  name: getLocationName(locationData),
  exact,
});

export default mapLocationData;
