import { Azimuth } from '../azimuth.type';
import { WeatherStateId } from '../weather-state-id.type';

export type DailyDetailed = Array<{
  night: boolean;
  dateTime: string;
  stateId: WeatherStateId | null;
  uvIndex: number | null;
  humidity: number | null;
  pressure: number | null;
  dewPoint: number | null;
  windSpeed: number | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
  stateText: string | null;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
}>;

export default DailyDetailed;
