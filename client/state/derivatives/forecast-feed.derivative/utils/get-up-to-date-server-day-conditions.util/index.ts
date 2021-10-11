import { isWithinInterval } from 'date-fns';
import { addDays } from 'date-fns/fp';
import findIndex from 'ramda/src/findIndex';
import propSatisfies from 'ramda/src/propSatisfies';

import { convertDateTimeToUtcString } from 'client/utils';

import { DayCondition } from 'common/types';

const addOneDay = addDays(1);

export const getUpToDateDayConditions = (
  dayConditions: DayCondition[]
): DayCondition[] => {
  const todayDate = new Date();

  const todayConditionIndex = findIndex(
    propSatisfies((dt: string) => {
      const date = new Date(convertDateTimeToUtcString(dt) as string);

      return isWithinInterval(todayDate, {
        start: date,
        end: addOneDay(date),
      });
    }, 'dt'),
    dayConditions
  );

  return dayConditions.slice(todayConditionIndex);
};

export default getUpToDateDayConditions;
