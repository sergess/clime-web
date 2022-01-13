import curry from 'ramda/src/curry';

import { DistanceUnit } from 'client/types';
import { DISTANCE_UNITS } from 'client/constants/measurement-units/distance.constant';
import { kilometersToMiles } from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedOne = toFixedN(1);

export const convertKilometersTo = curry(
  (unit: DistanceUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case DISTANCE_UNITS.MI:
        return toFixedOne(kilometersToMiles(value as number));
      default:
        return toFixedOne(value as number);
    }
  }
);

export default convertKilometersTo;
