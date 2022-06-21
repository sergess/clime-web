import { LocationType } from './location-type.type';

export type LocationParent = {
  name: string;
  type: LocationType;
  radar: boolean;
  url: string;
};

export default LocationParent;
