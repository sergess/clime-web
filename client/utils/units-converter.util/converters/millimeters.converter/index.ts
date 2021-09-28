import curry from 'ramda/src/curry';

import { PrecipitationUnit } from 'client/types';
import { millimetersToInches } from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedFour = toFixedN(4);

export const convertMillimetersTo = curry(
  (unit: PrecipitationUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case PrecipitationUnit.INCH:
        return toFixedFour(millimetersToInches(value as number));
      default:
        return toFixedFour(value as number);
    }
  }
);

export default convertMillimetersTo;