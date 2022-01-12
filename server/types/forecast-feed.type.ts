import { DayCondition } from './day-condition.type';
import { HourCondition } from './hour-condition.type';
import { DaySummaryCondition } from './day-summary-condition.type';

export type ForecastFeed = {
  dayConditions: DayCondition[];
  hourConditions: HourCondition[];
  daySummaryConditions: DaySummaryCondition[];
};

export default ForecastFeed;
