import { utcToZonedTime } from 'date-fns-tz';

import { UTC } from 'common/constants';

export const isTodayByTimeZone = (
  dateTime: string,
  timeZone: string | null = UTC
): boolean => {
  const today = utcToZonedTime(new Date(), timeZone ?? UTC);
  const date = utcToZonedTime(dateTime, timeZone ?? UTC);

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export default isTodayByTimeZone;
