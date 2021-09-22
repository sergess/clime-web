import { atomWithStorage } from 'jotai/utils';

import { PRESSURE_UNIT } from 'client/constants';
import { PressureUnit } from 'client/types';

export const pressureUnitAtom = atomWithStorage(
  PRESSURE_UNIT,
  PressureUnit.INCH
);

export default pressureUnitAtom;
