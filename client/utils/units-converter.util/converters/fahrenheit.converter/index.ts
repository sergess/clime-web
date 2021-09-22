import curry from 'ramda/src/curry';

import { TemperatureUnit } from 'client/types';
import { fahrenheitToCelsius } from 'client/utils/units-converter.util/formulas';
import { toFixedN } from 'client/utils/to-fixed-n.util';

import { isNumber } from 'common/utils';

const toFixedFour = toFixedN(4);

export const convertFahrenheitTo = curry(
  (unit: TemperatureUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case TemperatureUnit.C:
        return toFixedFour(fahrenheitToCelsius(value as number));
      default:
        return toFixedFour(value as number);
    }
  }
);

export default convertFahrenheitTo;
