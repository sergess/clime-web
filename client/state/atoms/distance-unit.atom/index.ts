import { atomWithStorage } from 'jotai/utils';

import { DISTANCE_UNITS, DISTANCE_UNIT } from 'client/constants';
import { DistanceUnit } from 'client/types';

export const distanceUnitAtom = atomWithStorage<DistanceUnit>(
  DISTANCE_UNIT,
  DISTANCE_UNITS.MI
);

export default distanceUnitAtom;
