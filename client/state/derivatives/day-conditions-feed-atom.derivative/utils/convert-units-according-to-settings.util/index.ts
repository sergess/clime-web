import curry from 'ramda/src/curry';

import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertKilometersTo,
  convertMillibarsTo,
} from 'client/utils';
import { DayCondition } from 'client/types';

import { Settings } from './types';

export const convertUnitsAccordingToSettings = curry(
  (settings: Settings, dayCondition: DayCondition): DayCondition => {
    const convertFahrenheitToUnit = convertFahrenheitTo(settings.temperature);
    const convertKilometersPerHourToUnit = convertKilometersPerHourTo(
      settings.windSpeed
    );
    const convertMillibarsToUnit = convertMillibarsTo(settings.pressure);
    const convertKilometersToUnit = convertKilometersTo(settings.distance);

    return {
      ...dayCondition,
      minTemperature: convertFahrenheitToUnit(dayCondition.minTemperature),
      maxTemperature: convertFahrenheitToUnit(dayCondition.maxTemperature),
      feelsLikeTemperature: convertFahrenheitToUnit(
        dayCondition.feelsLikeTemperature
      ),
      dewPoint: convertFahrenheitToUnit(dayCondition.dewPoint),
      windSpeed: convertKilometersPerHourToUnit(dayCondition.windSpeed),
      windGust: convertKilometersPerHourToUnit(dayCondition.windGust),
      pressure: convertMillibarsToUnit(dayCondition.pressure),
      visibility: convertKilometersToUnit(dayCondition.visibility),
    };
  }
);

export default convertUnitsAccordingToSettings;
