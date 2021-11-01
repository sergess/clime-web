import { Azimuth, WeatherStateId } from 'common/types';

export type UseTodayCardData = {
  time: string;
  night: boolean;
  stateText: string | null;
  temperature: number | string;
  stateId: WeatherStateId | null;
  feelsLikeTemperature: number | string;
  precipitationChance: number | string;
  windSpeed: number | string;
  precipitationLevel: number | string;
  humidity: number | string;
  pressure: number | string;
  maxTemperature: number | string;
  minTemperature: number | string;
  uvIndex: number | string;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
  visibility: number | string;
};

export default UseTodayCardData;
