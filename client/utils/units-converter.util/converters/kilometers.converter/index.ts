import curry from 'ramda/src/curry';

import { DistanceUnit } from 'client/types';
import { kilometersToMiles } from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedFour = toFixedN(4);

export const convertKilometersTo = curry(
  (unit: DistanceUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case DistanceUnit.MI:
        return toFixedFour(kilometersToMiles(value as number));
      default:
        return toFixedFour(value as number);
    }
  }
);

export default convertKilometersTo;
