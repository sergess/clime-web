import curry from 'ramda/src/curry';

import { LocationData } from 'common/types';
import { TimeFormat } from 'client/types';
import { isString } from 'common/utils';
import { TIME_FORMATS } from 'client/constants';
import { formatUtcString } from 'client/utils/change-time-format-to.util/rules';

export const changeTimeFormatTo = curry(
  (
    format: TimeFormat,
    location: LocationData | any,
    formatH12: string,
    formatH24: string,
    value: string | null
  ) => {
    if (!isString(value)) return value;

    switch (format) {
      case TIME_FORMATS.H12:
        return formatUtcString(value as string, formatH12, location?.timeZone);
      default:
        return formatUtcString(value as string, formatH24, location?.timeZone);
    }
  }
);

export default changeTimeFormatTo;
