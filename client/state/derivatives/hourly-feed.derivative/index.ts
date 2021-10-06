import { atom } from 'jotai';
import { addHours } from 'date-fns/fp';
import findIndex from 'ramda/src/findIndex';
import propSatisfies from 'ramda/src/propSatisfies';
import reduce from 'ramda/src/reduce';
import isEmpty from 'ramda/src/isEmpty';
import last from 'ramda/src/last';
import allPass from 'ramda/src/allPass';
import propEq from 'ramda/src/propEq';
import { differenceInHours, isWithinInterval } from 'date-fns';

import {
  convertUtcStringToLocalDate,
  isUtcStringNight,
  isUtcStringWithinInterval,
  generateHourlyCondition,
} from 'client/utils';
import { SUNSET, SUNRISE, WEATHER_STATE } from 'client/constants';
import { HourlyCondition } from 'client/types';

import { Condition, DayCondition } from 'common/types';

import { forecastItemsAtom } from '../forecast-items-atom.derivative';

const addOneHour = addHours(1);

const buildHourlyFeed = reduce<DayCondition, HourlyCondition[]>(
  (hourlyFeed, dayCondition) => {
    const { sr: sunrise, ss: sunset, hly } = dayCondition;

    return [
      ...hourlyFeed,
      ...reduce<Condition, HourlyCondition[]>(
        (hourlyConditions, condition) => {
          const hourlyCondition = generateHourlyCondition(
            WEATHER_STATE,
            condition,
            isUtcStringNight(condition.dt, sunrise, sunset)
          );

          if (isEmpty(hourlyConditions)) {
            return [hourlyCondition];
          }

          const previousHourlyCondition = last(
            hourlyConditions
          ) as HourlyCondition;
          const intervalIsLessThanAnHour =
            differenceInHours(
              convertUtcStringToLocalDate(hourlyCondition.dt),
              convertUtcStringToLocalDate(previousHourlyCondition.dt)
            ) < 1;

          if (intervalIsLessThanAnHour) {
            return hourlyConditions;
          }

          if (
            isUtcStringWithinInterval(
              sunrise,
              previousHourlyCondition.dt,
              hourlyCondition.dt
            )
          ) {
            return [
              ...hourlyConditions,
              generateHourlyCondition(SUNRISE, { dt: sunrise }),
              hourlyCondition,
            ];
          }

          if (
            isUtcStringWithinInterval(
              sunset,
              previousHourlyCondition.dt,
              hourlyCondition.dt
            )
          ) {
            return [
              ...hourlyConditions,
              generateHourlyCondition(SUNSET, { dt: sunset }),
              hourlyCondition,
            ];
          }

          return [...hourlyConditions, hourlyCondition];
        },
        [],
        hly
      ),
    ];
  },
  []
);

export const hourlyFeedAtom = atom((get) => {
  const forecastFromToday = get(forecastItemsAtom);

  const hourlyFeed = buildHourlyFeed(forecastFromToday);
  const nextHour = addOneHour(new Date());

  const isNextHour = propSatisfies((dt: string) => {
    const date = convertUtcStringToLocalDate(dt);

    return isWithinInterval(nextHour, { start: date, end: addOneHour(date) });
  }, 'dt');
  const isWeatherStateVariant = propEq('variant', WEATHER_STATE);

  const nextHourIndex = findIndex(
    allPass([isNextHour, isWeatherStateVariant]),
    hourlyFeed
  );

  return hourlyFeed.slice(nextHourIndex);
});

export default hourlyFeedAtom;
