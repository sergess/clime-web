import { WeatherStateId, DayPeriod } from 'common/types';

export type DaySummaryCondition = {
  night: boolean;
  stateId: WeatherStateId | null;
  period: DayPeriod;
  temperature: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
};

export default DaySummaryCondition;
