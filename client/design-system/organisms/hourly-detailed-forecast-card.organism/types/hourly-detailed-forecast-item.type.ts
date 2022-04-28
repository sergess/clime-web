import { Azimuth, WeatherStateId, HourConditionVariant } from 'common/types';

export type HourlyDetailedForecastItem = {
  night: boolean;
  dateTime: string;
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
  date: string;
  time: string;
  relatedDayConditionIndex: number;
  windAzimuth: Azimuth;
  windDirectionAngle: number;
};

export default HourlyDetailedForecastItem;
