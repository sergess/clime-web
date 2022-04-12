import curry from 'ramda/src/curry';
import { formatInTimeZone } from 'date-fns-tz';

import { useLocationData } from 'client/hooks/use-location-data.hook';
import { isString } from 'common/utils';
import { UTC } from 'client/constants';

export const useFormattedDate = () => {
  const location = useLocationData();

  return curry((format: string, value: string | null) => {
    if (!isString(value)) return value;

    const timeZone = location?.timeZone || UTC;

    return formatInTimeZone(value as string, timeZone, format);
  });
};

export default useFormattedDate;
