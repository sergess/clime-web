import { WEATHER_STATE } from 'common/constants';

import { HourCondition } from 'server/types';

const NUMBER_OF_FORECAST_HOURS = 48;

export const getNumberOfHourConditionsToTake = (
  hourConditions: HourCondition[]
): number => {
  let numberOfWeatherStateConditions = 0;
  let numberOfHourConditions = 0;

  while (numberOfWeatherStateConditions < NUMBER_OF_FORECAST_HOURS) {
    if (hourConditions[numberOfHourConditions].variant === WEATHER_STATE) {
      numberOfWeatherStateConditions += 1;
    }

    numberOfHourConditions += 1;
  }

  return numberOfHourConditions;
};

export default getNumberOfHourConditionsToTake;
