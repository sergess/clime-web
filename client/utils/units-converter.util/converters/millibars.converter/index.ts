import curry from 'ramda/src/curry';

import { PressureUnit } from 'client/types';
import {
  millibarsToMillimeters,
  millibarsToInches,
} from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedOne = toFixedN(1);

export const convertMillibarsTo = curry(
  (unit: PressureUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case PressureUnit.MM:
        return Math.round(millibarsToMillimeters(value as number));
      case PressureUnit.INCH:
        return toFixedOne(millibarsToInches(value as number));
      default:
        return Math.round(value as number);
    }
  }
);

export default convertMillibarsTo;
