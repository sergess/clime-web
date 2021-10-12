import reduce from 'ramda/src/reduce';
import isEmpty from 'ramda/src/isEmpty';
import last from 'ramda/src/last';
import { differenceInHours, parseISO } from 'date-fns';

import { isUtcStringWithinInterval } from 'client/utils';
import { SUNSET, SUNRISE } from 'client/constants';
import { HourCondition, DayCondition } from 'client/types';

import { generateEmptyHourCondition } from '../generate-empty-hour-condition.util';

export const buildHourConditionsFeed = reduce<DayCondition, HourCondition[]>(
  (hourlyFeed, dayCondition) => {
    const { sunrise, sunset, hourly } = dayCondition;

    return [
      ...hourlyFeed,
      ...reduce<HourCondition, HourCondition[]>(
        (hourConditions, hourCondition) => {
          if (isEmpty(hourConditions)) {
            return [hourCondition];
          }

          const previousHourCondition = last(hourConditions) as HourCondition;
          const intervalIsLessThanAnHour =
            differenceInHours(
              parseISO(hourCondition.dateTime),
              parseISO(previousHourCondition.dateTime)
            ) < 1;

          if (intervalIsLessThanAnHour) {
            return hourConditions;
          }

          if (
            isUtcStringWithinInterval(
              sunrise,
              previousHourCondition.dateTime,
              hourCondition.dateTime
            )
          ) {
            return [
              ...hourConditions,
              generateEmptyHourCondition(sunrise as string, SUNRISE),
              hourCondition,
            ];
          }

          if (
            isUtcStringWithinInterval(
              sunset,
              previousHourCondition.dateTime,
              hourCondition.dateTime
            )
          ) {
            return [
              ...hourConditions,
              generateEmptyHourCondition(sunset as string, SUNSET),
              hourCondition,
            ];
          }

          return [...hourConditions, hourCondition];
        },
        [],
        hourly
      ),
    ];
  },
  []
);

export default buildHourConditionsFeed;
