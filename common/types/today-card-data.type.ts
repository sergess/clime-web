import { WeatherStateId } from './weather-state-id.type';
import { Azimuth } from './azimuth.type';

export type TodayCardData = {
  time: string;
  night: boolean;
  stateText: string | null;
  temperature: number | null;
  stateId: WeatherStateId | null;
  feelsLikeTemperature: number | null;
  precipitationChance: number | null;
  windSpeed: number | null;
  precipitationLevel: number | null;
  humidity: number | null;
  pressure: number | null;
  maxTemperature: number | null;
  minTemperature: number | null;
  uvIndex: number | null;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
};

export default TodayCardData;
