import {
  DistanceUnit,
  PressureUnit,
  TemperatureUnit,
  SpeedUnit,
} from 'client/types';

export type Settings = {
  distance: DistanceUnit;
  pressure: PressureUnit;
  temperature: TemperatureUnit;
  windSpeed: SpeedUnit;
};

export default Settings;
