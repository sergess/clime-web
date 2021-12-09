import { isNil } from 'ramda';

import {
  TEMPERATURE_UNIT,
  WIND_SPEED_UNIT,
  PRECIPITATION_UNIT,
  PRESSURE_UNIT,
  DISTANCE_UNIT,
} from 'client/constants';

export const areSettingsEmpty = (): boolean =>
  isNil(localStorage.getItem(TEMPERATURE_UNIT)) &&
  isNil(localStorage.getItem(WIND_SPEED_UNIT)) &&
  isNil(localStorage.getItem(PRECIPITATION_UNIT)) &&
  isNil(localStorage.getItem(PRESSURE_UNIT)) &&
  isNil(localStorage.getItem(DISTANCE_UNIT));

export default areSettingsEmpty;
