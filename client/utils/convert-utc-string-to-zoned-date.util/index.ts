import { utcToZonedTime } from 'date-fns-tz';

import { UTC } from 'client/constants';

export const convertUtcStringToZonedDate = (
  utcString: string,
  timeZone: string | null | undefined
): Date => utcToZonedTime(`${utcString} ${UTC}`, timeZone || UTC);

export default convertUtcStringToZonedDate;
