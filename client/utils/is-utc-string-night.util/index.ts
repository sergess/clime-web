import { isUtcStringWithinInterval } from '../is-utc-string-within-interval.util';

export const isUtcStringNight = (
  dateTime: string | null,
  sunrise: string | null,
  sunset: string | null
): boolean => !isUtcStringWithinInterval(dateTime, sunrise, sunset);

export default isUtcStringNight;
