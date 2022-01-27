import curry from 'ramda/src/curry';

import { TemperatureUnit } from 'client/types';
import { TEMPERATURE_UNITS } from 'client/constants/measurement-units/temperature.constant';
import { fahrenheitToCelsius } from 'client/utils/units-converter.util/formulas';

import { isNumber } from 'common/utils';

export const convertFahrenheitTo = curry(
  (unit: TemperatureUnit, value: number | null) => {
    if (!isNumber(value)) return value;

    switch (unit) {
      case TEMPERATURE_UNITS.C:
        return Math.round(fahrenheitToCelsius(value as number));
      default:
        return Math.round(value as number);
    }
  }
);

export default convertFahrenheitTo;
