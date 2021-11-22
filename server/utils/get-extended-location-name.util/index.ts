import { LocationData } from 'common/types';

export const getExtendedLocationName = (locationData: LocationData): string =>
  locationData?.district
    ? `${locationData?.district}, ${locationData.name}`
    : locationData.name;

export default getExtendedLocationName;
