import {
  DistanceUnit,
  PrecipitationUnit,
  PressureUnit,
  TemperatureUnit,
  SpeedUnit,
  TimeFormat,
} from './units';

export type Settings = {
  distance: DistanceUnit;
  precipitation: PrecipitationUnit;
  pressure: PressureUnit;
  temperature: TemperatureUnit;
  windSpeed: SpeedUnit;
  time: TimeFormat;
};

export default Settings;
