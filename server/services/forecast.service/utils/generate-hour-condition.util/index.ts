import { HourConditionVariant } from 'common/types';

import { HourCondition } from 'server/types';

export const generateHourCondition = (
  dateTime: string,
  variant: HourConditionVariant,
  hourCondition: HourCondition
): HourCondition => ({
  ...hourCondition,
  variant,
  dateTime,
});

export default generateHourCondition;
