import curry from 'ramda/src/curry';
import { formatInTimeZone } from 'date-fns-tz';

import { LocationData } from 'common/types';
import { TimeFormat } from 'client/types';
import { isString } from 'common/utils';
import { TIME_FORMATS } from 'client/constants';
import { UTC } from 'server/constants';

export const changeTimeFormatTo = curry(
  (
    format: TimeFormat,
    location: LocationData | any,
    formatH12: string,
    formatH24: string,
    value: string | null
  ) => {
    if (!isString(value)) return value;

    const timeZone = location?.timeZone || UTC;

    switch (format) {
      case TIME_FORMATS.H12:
        return formatInTimeZone(value as string, timeZone, formatH12);
      default:
        return formatInTimeZone(value as string, timeZone, formatH24);
    }
  }
);

export default changeTimeFormatTo;
