import { atomWithStorage } from 'jotai/utils';

import { PRECIPITATION_UNITS, PRECIPITATION_UNIT } from 'client/constants';
import { PrecipitationUnit } from 'client/types';

export const precipitationUnitAtom = atomWithStorage<PrecipitationUnit>(
  PRECIPITATION_UNIT,
  PRECIPITATION_UNITS.INCH
);

export default precipitationUnitAtom;
