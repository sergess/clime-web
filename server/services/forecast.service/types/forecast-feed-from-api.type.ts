import { ConditionFromApi } from './condition-from-api.type';
import { DayConditionFromApi } from './day-condition-from-api.type';

export type ForecastFeedFromApi = {
  cur: ConditionFromApi;
  frst: DayConditionFromApi[];
};

export default ForecastFeedFromApi;
