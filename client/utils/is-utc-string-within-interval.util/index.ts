import { isWithinInterval } from 'date-fns';
import isNil from 'ramda/src/isNil';

import { convertUtcStringToLocalDate } from '../convert-utc-string-to-local-date.util';

export const isUtcStringWithinInterval = (
  dateTime: string | null,
  start: string | null,
  end: string | null
): boolean => {
  if (isNil(dateTime) || isNil(start) || isNil(end)) return false;

  const date = convertUtcStringToLocalDate(dateTime);
  const startDate = convertUtcStringToLocalDate(start);
  const endDate = convertUtcStringToLocalDate(end);

  return isWithinInterval(date, { start: startDate, end: endDate });
};

export default isUtcStringWithinInterval;
