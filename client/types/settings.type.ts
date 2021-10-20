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
};

export default Settings;
