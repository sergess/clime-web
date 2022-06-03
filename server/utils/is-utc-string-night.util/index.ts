import { isAfter, parseISO } from 'date-fns';
import isNil from 'ramda/src/isNil';

import { isUtcStringWithinInterval } from '../is-utc-string-within-interval.util';

export const isUtcStringNight = (
  dateTime: string | null,
  sunrise: string | null,
  sunset: string | null
): boolean => {
  if (isNil(sunrise) || isNil(sunset)) return false;

  // Check for polar day
  if (isAfter(parseISO(sunrise), parseISO(sunset))) {
    return !isUtcStringWithinInterval(dateTime, sunset, sunrise);
  }

  return !isUtcStringWithinInterval(dateTime, sunrise, sunset);
};

export default isUtcStringNight;
