import { atomWithStorage } from 'jotai/utils';

import { PRECIPITATION_UNIT } from 'client/constants';
import { PrecipitationUnit } from 'client/types';

export const precipitationUnitAtom = atomWithStorage(
  PRECIPITATION_UNIT,
  PrecipitationUnit.INCH
);

export default precipitationUnitAtom;
