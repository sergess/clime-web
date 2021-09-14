import { GetServerSidePropsContext } from 'next';

import { Geocode, Utility, LocationData } from 'server/services';

import { withApiV3Service } from '../with-api-v3-service.middleware';

export const withLocationDataByIp = async (
  context: GetServerSidePropsContext
): Promise<LocationData | null> => {
  const { locale, defaultLocale } = context;

  const utilityService = new Utility();
  const geocodeService = withApiV3Service<Geocode>(context, Geocode);

  const location = await utilityService.getLocation();

  if (!location) return null;

  const locationData = await geocodeService.getLocationDataByCoordinates({
    latitude: location.latitude,
    longitude: location.longitude,
    language: locale || (defaultLocale as string),
  });

  return locationData;
};

export default withLocationDataByIp;
