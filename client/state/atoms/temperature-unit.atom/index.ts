import { atomWithStorage } from 'jotai/utils';

import { TemperatureUnit } from 'client/types';
import { TEMPERATURE_UNIT } from 'client/constants';

export const temperatureUnitAtom = atomWithStorage(
  TEMPERATURE_UNIT,
  TemperatureUnit.F
);

export default temperatureUnitAtom;
