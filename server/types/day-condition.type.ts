import { WeatherStateId } from 'common/types';

import { HourCondition } from './hour-condition.type';
import { DaySummary } from './day-summary.type';

export type DayCondition = {
  dateTime: string;
  stateId: WeatherStateId | null;
  stateText: string | null;
  stateNightText: string | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  feelsLikeTemperature: number | null;
  dewPoint: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  windGust: number | null;
  precipitationChance: number | null;
  visibility: number | null;
  humidity: number | null;
  pressure: number | null;
  sunrise: string | null;
  sunset: string | null;
  moonrise: string | null;
  moonset: string | null;
  uvIndex: number | null;
  hourly: HourCondition[];
  summary: DaySummary;
};

export default DayCondition;
