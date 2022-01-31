import { LocationData } from 'common/types';

import { Geocode, Utility } from 'server/services';

import { FetchLocationDataArguments } from './types';

export const fetchLocationData = async ({
  userAgentHeader,
  autolocation,
  language,
  locationFromCookies,
  slug,
  clientIp,
}: FetchLocationDataArguments): Promise<LocationData | null> => {
  const geocodeService = new Geocode({ userAgentHeader });

  if (autolocation) {
    const locationDataFromCookies =
      await geocodeService.getLocationDataByCoordinates({
        location: locationFromCookies,
        language,
      });

    if (locationDataFromCookies) {
      return locationDataFromCookies;
    }

    const utilityService = new Utility();
    const locationByIp = await utilityService.getLocationLookup(clientIp);

    if (!locationByIp) return null;

    const locationDataByIp = await geocodeService.getLocationDataByCoordinates({
      location: locationByIp,
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
