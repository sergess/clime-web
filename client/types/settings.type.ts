import { TimeFormat } from 'client/types/time-format.type';

import {
  DistanceUnit,
  PrecipitationUnit,
  PressureUnit,
  TemperatureUnit,
  SpeedUnit,
} from './units';

export type Settings = {
  distance: DistanceUnit;
  precipitation: PrecipitationUnit;
  pressure: PressureUnit;
  temperature: TemperatureUnit;
  windSpeed: SpeedUnit;
  timeFormat: TimeFormat;
};

export default Settings;
