import { format as formatTz } from 'date-fns-tz';

import { UTC } from 'client/constants';

import { convertUtcStringToZonedDate } from '../convert-utc-string-to-zoned-date.util';

export const formatUtcString = (
  utcString: string,
  format: string,
  timeZone: string | null | undefined
): string =>
  formatTz(convertUtcStringToZonedDate(utcString, timeZone), format, {
    timeZone: timeZone || UTC,
  });

export default formatUtcString;
