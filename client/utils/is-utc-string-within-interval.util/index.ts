import { isWithinInterval, parseISO } from 'date-fns';
import isNil from 'ramda/src/isNil';

export const isUtcStringWithinInterval = (
  dateTime: string | null,
  start: string | null,
  end: string | null
): boolean => {
  if (isNil(dateTime) || isNil(start) || isNil(end)) return false;

  return isWithinInterval(parseISO(dateTime), {
    start: parseISO(start),
    end: parseISO(end),
  });
};

export default isUtcStringWithinInterval;
