import { Azimuth, WeatherStateId } from 'common/types';

export type DailyDetailedForecastItem = {
  night: boolean;
  dateTime: string;
  stateId: WeatherStateId | null;
  uvIndex: number | string;
  humidity: number | string;
  pressure: number | string;
  dewPoint: number | string;
  windSpeed: number | string;
  minTemperature: number | string;
  maxTemperature: number | string;
  precipitationLevel: number | string;
  precipitationChance: number | string;
  stateText: string | null;
  day: string;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
};

export default DailyDetailedForecastItem;
