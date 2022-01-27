import curry from 'ramda/src/curry';

import { PrecipitationUnit } from 'client/types';
import { PRECIPITATION_UNITS } from 'client/constants/measurement-units/precipitation.constant';
import { millimetersToInches } from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedTwo = toFixedN(2);

export const convertMillimetersTo = curry(
  (unit: PrecipitationUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case PRECIPITATION_UNITS.INCH:
        return toFixedTwo(millimetersToInches(value as number));
      default:
        return toFixedTwo(value as number);
    }
  }
);

export default convertMillimetersTo;
