import curry from 'ramda/src/curry';

import { PressureUnit } from 'client/types';
import { PRESSURE_UNITS } from 'client/constants/measurement-units/pressure.constant';
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
      case PRESSURE_UNITS.MM:
        return Math.round(millibarsToMillimeters(value as number));
      case PRESSURE_UNITS.INCH:
        return toFixedOne(millibarsToInches(value as number));
      default:
        return Math.round(value as number);
    }
  }
);

export default convertMillibarsTo;
