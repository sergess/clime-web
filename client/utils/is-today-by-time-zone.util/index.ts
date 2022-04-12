import { utcToZonedTime } from 'date-fns-tz';

import { UTC } from 'common/constants';

export const isTodayByTimeZone = (
  dateTime: string,
  timeZone = UTC
): boolean => {
  const today = utcToZonedTime(new Date(), timeZone);
  const date = utcToZonedTime(dateTime, timeZone);

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export default isTodayByTimeZone;
