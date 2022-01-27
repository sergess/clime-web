import { atomWithStorage } from 'jotai/utils';

import { PRESSURE_UNITS, PRESSURE_UNIT } from 'client/constants';
import { PressureUnit } from 'client/types';

export const pressureUnitAtom = atomWithStorage<PressureUnit>(
  PRESSURE_UNIT,
  PRESSURE_UNITS.INCH
);

export default pressureUnitAtom;
