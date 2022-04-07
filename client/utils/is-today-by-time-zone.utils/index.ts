import { utcToZonedTime } from 'date-fns-tz';

export const isTodayByTimeZone = (
  dateTime: string,
  timeZone: string
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
