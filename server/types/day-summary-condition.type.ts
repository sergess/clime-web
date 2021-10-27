import { WeatherStateId } from 'common/types';

export type DaySummaryCondition = {
  night: boolean;
  stateId: WeatherStateId | null;
  stateText: string | null;
  stateNightText: string | null;
  temperature: number | null;
  windSpeed: number | null;
  windDirectionwd: number | null;
  precipitationLevel: number | null;
  precipitationChance: number | null;
};

export default DaySummaryCondition;
