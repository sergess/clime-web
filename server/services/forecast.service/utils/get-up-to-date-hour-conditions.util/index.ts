import { addHours } from 'date-fns/fp';
import findIndex from 'ramda/src/findIndex';
import propSatisfies from 'ramda/src/propSatisfies';
import allPass from 'ramda/src/allPass';
import propEq from 'ramda/src/propEq';
import { isWithinInterval, parseISO } from 'date-fns';

import { WEATHER_STATE } from 'common/constants';

import { HourCondition } from 'server/types';

const addOneHour = addHours(1);

export const getUpToDateHourConditions = (
  currentHourCondition: HourCondition,
  hourConditions: HourCondition[]
): HourCondition[] => {
  const nextHour = addOneHour(new Date());

  const isNextHour = propSatisfies((dateTime: string) => {
    const date = parseISO(dateTime);

    return isWithinInterval(nextHour, { start: date, end: addOneHour(date) });
  }, 'dateTime');
  const isWeatherStateVariant = propEq('variant', WEATHER_STATE);

  const nextHourIndex = findIndex(
    allPass([isNextHour, isWeatherStateVariant]),
    hourConditions
  );

  return [currentHourCondition, ...hourConditions.slice(nextHourIndex)];
};

export default getUpToDateHourConditions;
