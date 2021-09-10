import { CurrentCondition } from './current-condition.type';
import { DayCondition } from './day-condition.type';

export type ForecastFeedResponse = {
  cur: CurrentCondition;
  frst: DayCondition[];
};

export default ForecastFeedResponse;
