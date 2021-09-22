import { atomWithStorage } from 'jotai/utils';

import { SpeedUnit } from 'client/types';
import { WIND_SPEED_UNIT } from 'client/constants';

export const windSpeedUnitAtom = atomWithStorage(
  WIND_SPEED_UNIT,
  SpeedUnit.MPH
);

export default windSpeedUnitAtom;
