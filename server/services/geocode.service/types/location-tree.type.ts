import { LocationChild, LocationParent } from 'common/types';

export type LocationTree = {
  items: LocationChild[];
  parents: LocationParent[];
};

export default LocationTree;
