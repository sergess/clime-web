import { useAtomValue } from 'jotai/utils';

import { timeFormatAtom } from 'client/state/atoms';
import { useLocationData } from 'client/hooks/use-location-data.hook';
import curry from 'ramda/src/curry';
import { isString } from 'common/utils';
import { UTC } from 'server/constants';
import { TIME_FORMATS } from 'client/constants';
import { formatInTimeZone } from 'date-fns-tz';

export const useFormattedDate = () => {
  const timeFormat = useAtomValue(timeFormatAtom);
  const location = useLocationData();

  return curry((formatH12: string, formatH24: string, value: string | null) => {
    if (!isString(value)) return value;

    const timeZone = location?.timeZone || UTC;

    switch (timeFormat) {
      case TIME_FORMATS.H12:
        return formatInTimeZone(value as string, timeZone, formatH12);
      default:
        return formatInTimeZone(value as string, timeZone, formatH24);
    }
  });
};

export default useFormattedDate;
