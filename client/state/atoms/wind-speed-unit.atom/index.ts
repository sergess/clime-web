import { atomWithStorage } from 'jotai/utils';

import { SPEED_UNITS, WIND_SPEED_UNIT } from 'client/constants';
import { SpeedUnit } from 'client/types';

export const windSpeedUnitAtom = atomWithStorage<SpeedUnit>(
  WIND_SPEED_UNIT,
  SPEED_UNITS.MPH
);

export default windSpeedUnitAtom;
