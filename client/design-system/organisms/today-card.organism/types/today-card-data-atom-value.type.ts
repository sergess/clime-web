import { Azimuth, WeatherStateId } from 'common/types';

export type TodayCardDataAtomValue = {
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
};

export default TodayCardDataAtomValue;
