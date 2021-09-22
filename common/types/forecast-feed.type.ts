import { CurrentCondition } from './current-condition.type';
import { DayCondition } from './day-condition.type';

export type ForecastFeed = {
  cur: CurrentCondition;
  frst: DayCondition[];
};

export default ForecastFeed;
