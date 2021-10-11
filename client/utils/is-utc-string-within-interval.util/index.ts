import { isWithinInterval } from 'date-fns';
import isNil from 'ramda/src/isNil';

export const isUtcStringWithinInterval = (
  dateTime: string | null,
  start: string | null,
  end: string | null
): boolean => {
  if (isNil(dateTime) || isNil(start) || isNil(end)) return false;

  return isWithinInterval(new Date(dateTime), {
    start: new Date(start),
    end: new Date(end),
  });
};

export default isUtcStringWithinInterval;
