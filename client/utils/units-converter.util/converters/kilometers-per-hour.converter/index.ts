import curry from 'ramda/src/curry';

import { SpeedUnit } from 'client/types';
import {
  kilometersToMiles,
  kilometersPerHourToMeterPerSecond,
} from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedFour = toFixedN(4);

export const convertKilometersPerHourTo = curry(
  (unit: SpeedUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case SpeedUnit.MPH:
        return toFixedFour(kilometersToMiles(value as number));
      case SpeedUnit.MS:
        return toFixedFour(kilometersPerHourToMeterPerSecond(value as number));
      default:
        return toFixedFour(value as number);
    }
  }
);

export default convertKilometersPerHourTo;
