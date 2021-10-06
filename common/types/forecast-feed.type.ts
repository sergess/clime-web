import { Condition } from './condition.type';
import { DayCondition } from './day-condition.type';

export type ForecastFeed = {
  cur: Condition;
  frst: DayCondition[];
};

export default ForecastFeed;
