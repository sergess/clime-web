import isNil from 'ramda/src/isNil';
import unless from 'ramda/src/unless';

import { UTC } from 'client/constants';

export const convertDateTimeToUtcString = unless(
  isNil,
  (dateTime: string | null): string | null => `${dateTime} ${UTC}`
);

export default convertDateTimeToUtcString;
