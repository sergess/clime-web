import reduce from 'ramda/src/reduce';
import isEmpty from 'ramda/src/isEmpty';
import last from 'ramda/src/last';
import { differenceInHours, parseISO } from 'date-fns';

import { SUNSET, SUNRISE } from 'common/constants';

import { isUtcStringWithinInterval } from 'server/utils';
import { HourCondition, DayCondition } from 'server/types';

import { generateHourCondition } from '../generate-hour-condition.util';

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
              generateHourCondition(
                sunrise as string,
                SUNRISE,
                previousHourCondition
              ),
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
              generateHourCondition(
                sunset as string,
                SUNSET,
                previousHourCondition
              ),
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
