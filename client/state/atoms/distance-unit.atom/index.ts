import { atomWithStorage } from 'jotai/utils';

import { DISTANCE_UNIT } from 'client/constants';
import { DistanceUnit } from 'client/types';

export const distanceUnitAtom = atomWithStorage(DISTANCE_UNIT, DistanceUnit.MI);

export default distanceUnitAtom;
