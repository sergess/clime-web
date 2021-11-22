import { LocationData } from 'common/types';
import { isLocationValid } from 'common/utils';

import { Geocode, Utility } from 'server/services';

import { FetchLocationDataArguments } from './types';

export const fetchLocationData = async ({
  userAgentHeader,
  autolocation,
  language,
  locationFromCookies,
  slug,
}: FetchLocationDataArguments): Promise<LocationData | null> => {
  const geocodeService = new Geocode({ userAgentHeader, locationFromCookies });

  if (autolocation) {
    if (isLocationValid(locationFromCookies)) {
      const locationDataFromCookies =
        await geocodeService.getLocationDataByCoordinates({
          latitude: locationFromCookies.latitude,
          longitude: locationFromCookies.longitude,
          language,
        });

      return locationDataFromCookies;
    }

    const utilityService = new Utility();
    const locationByIp = await utilityService.getLocation();

    if (!locationByIp) return null;

    const locationDataByIp = await geocodeService.getLocationDataByCoordinates({
      latitude: locationByIp.latitude,
      longitude: locationByIp.longitude,
      language,
    });

    return locationDataByIp;
  }

  if (!slug) {
    return null;
  }

  const locationData = await geocodeService.getLocationDataBySlug({
    slug,
    language,
  });

  return locationData;
};

export default fetchLocationData;
