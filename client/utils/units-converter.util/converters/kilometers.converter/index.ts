import curry from 'ramda/src/curry';

import { DistanceUnit } from 'client/types';
import { kilometersToMiles } from 'client/utils/units-converter.util/formulas';

import { isNumber } from 'common/utils';

export const convertKilometersTo = curry(
  (unit: DistanceUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case DistanceUnit.MI:
        return Math.round(kilometersToMiles(value as number));
      default:
        return Math.round(value as number);
    }
  }
);

export default convertKilometersTo;
