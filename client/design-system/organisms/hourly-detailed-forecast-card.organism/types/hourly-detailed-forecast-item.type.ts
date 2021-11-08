import { Azimuth, WeatherStateId, HourConditionVariant } from 'common/types';

export type HourlyDetailedForecastItem = {
  night: boolean;
  variant: HourConditionVariant;
  stateId: WeatherStateId | null;
  uvIndex: number | string;
  humidity: number | string;
  pressure: number | string;
  windSpeed: number | string;
  temperature: number | string;
  feelsLikeTemperature: number | string;
  precipitationLevel: number | string;
  precipitationChance: number | string;
  stateText: string | null;
  time: string;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
};

export default HourlyDetailedForecastItem;
