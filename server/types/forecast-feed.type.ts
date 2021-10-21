import { DayCondition } from './day-condition.type';
import { HourCondition } from './hour-condition.type';

export type ForecastFeed = {
  dayConditions: DayCondition[];
  hourConditions: HourCondition[];
};

export default ForecastFeed;
