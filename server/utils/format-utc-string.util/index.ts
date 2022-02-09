import { format as formatTz, utcToZonedTime } from 'date-fns-tz';

import { UTC } from 'common/constants';

export const formatUtcString = (
  utcString: string,
  format: string,
  timeZone: string | null | undefined
): string =>
  formatTz(utcToZonedTime(utcString, timeZone || UTC), format, {
    timeZone: timeZone || UTC,
  });

export default formatUtcString;
