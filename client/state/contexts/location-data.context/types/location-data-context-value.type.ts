import { LocationData } from 'common/types';

export type LocationDataContextValue = {
  locationData: LocationData | null;
  setLocationData: (locationData: LocationData) => void;
};

export default LocationDataContextValue;
