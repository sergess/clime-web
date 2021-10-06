import { Condition } from 'common/types';

import { HourlyConditionVariant } from './hourly-condition-variant.type';

export type HourlyCondition = {
  variant: HourlyConditionVariant;
  night: boolean;
} & Condition;

export default HourlyCondition;
