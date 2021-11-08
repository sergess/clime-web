import { HourConditionVariant, WeatherStateId } from 'common/types';

export type HourCondition = {
  variant: HourConditionVariant;
  night: boolean;
  dateTime: string;
  stateId: WeatherStateId | null;
  stateText: string | null;
  stateNightText: string | null;
  temperature: number | null;
  feelsLikeTemperature: number | null;
  dewPoint: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  windGust: number | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
  visibility: number | null;
  humidity: number | null;
  pressure: number | null;
  uvIndex: number | null;
};

export default HourCondition;
