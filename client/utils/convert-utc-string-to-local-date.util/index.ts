import isNil from 'ramda/src/isNil';
import unless from 'ramda/src/unless';

import { UTC } from 'client/constants';

export const convertUtcStringToLocalDate = unless(
  isNil,
  (utcString: string | null): Date => new Date(`${utcString} ${UTC}`)
);

export default convertUtcStringToLocalDate;
