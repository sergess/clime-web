import { atomWithStorage } from 'jotai/utils';

import { TEMPERATURE_UNITS, TEMPERATURE_UNIT } from 'client/constants';
import { TemperatureUnit } from 'client/types';

export const temperatureUnitAtom = atomWithStorage<TemperatureUnit>(
  TEMPERATURE_UNIT,
  TEMPERATURE_UNITS.F
);

export default temperatureUnitAtom;
