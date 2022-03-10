import { useAtomValue } from 'jotai/utils';
import curry from 'ramda/src/curry';

import { timeFormatAtom } from 'client/state/atoms';
import { useLocationData } from 'client/hooks/use-location-data.hook';
import { isString } from 'common/utils';
import { UTC } from 'server/constants';
import { H_MM } from 'client/constants';
import { formatInTimeZone } from 'date-fns-tz';
import { TimeFormat } from 'client/types';

export const useFormattedDate = () => {
  const timeFormat = useAtomValue(timeFormatAtom);
  const location = useLocationData();

  return curry((format: string, value: string | null) => {
    if (!isString(value)) return value;

    const timeZone = location?.timeZone || UTC;

    switch (timeFormat) {
      case TimeFormat.H12:
        return formatInTimeZone(value as string, timeZone, format);
      default:
        return formatInTimeZone(value as string, timeZone, H_MM);
    }
  });
};

export default useFormattedDate;
