import { addHours } from 'date-fns/fp';
import findIndex from 'ramda/src/findIndex';
import propSatisfies from 'ramda/src/propSatisfies';
import allPass from 'ramda/src/allPass';
import propEq from 'ramda/src/propEq';
import { isWithinInterval } from 'date-fns';

import { WEATHER_STATE } from 'client/constants';
import { HourCondition } from 'client/types';

const addOneHour = addHours(1);

export const getUpToDateHourConditions = (
  currentHourCondition: HourCondition,
  hourConditionsFeed: HourCondition[]
): HourCondition[] => {
  const nextHour = addOneHour(new Date());

  const isNextHour = propSatisfies((dateTime: string) => {
    const date = new Date(dateTime);

    return isWithinInterval(nextHour, { start: date, end: addOneHour(date) });
  }, 'dateTime');
  const isWeatherStateVariant = propEq('variant', WEATHER_STATE);

  const nextHourIndex = findIndex(
    allPass([isNextHour, isWeatherStateVariant]),
    hourConditionsFeed
  );

  return [currentHourCondition, ...hourConditionsFeed.slice(nextHourIndex)];
};

export default getUpToDateHourConditions;
