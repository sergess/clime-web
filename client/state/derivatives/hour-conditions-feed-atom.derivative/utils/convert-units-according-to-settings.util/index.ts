import curry from 'ramda/src/curry';

import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertKilometersTo,
  convertMillimetersTo,
  convertMillibarsTo,
} from 'client/utils';
import { Settings, HourCondition } from 'client/types';

export const convertUnitsAccordingToSettings = curry(
  (settings: Settings, hourCondition: HourCondition): HourCondition => {
    const convertFahrenheitToUnit = convertFahrenheitTo(settings.temperature);
    const convertKilometersPerHourToUnit = convertKilometersPerHourTo(
      settings.windSpeed
    );
    const convertMillimetersToUnit = convertMillimetersTo(
      settings.precipitation
    );
    const convertMillibarsToUnit = convertMillibarsTo(settings.pressure);
    const convertKilometersToUnit = convertKilometersTo(settings.distance);

    return {
      ...hourCondition,
      temperature: convertFahrenheitToUnit(hourCondition.temperature),
      feelsLikeTemperature: convertFahrenheitToUnit(
        hourCondition.feelsLikeTemperature
      ),
      dewPoint: convertFahrenheitToUnit(hourCondition.dewPoint),
      windSpeed: convertKilometersPerHourToUnit(hourCondition.windSpeed),
      windGust: convertKilometersPerHourToUnit(hourCondition.windGust),
      precipitationLevel: convertMillimetersToUnit(
        hourCondition.precipitationLevel
      ),
      pressure: convertMillibarsToUnit(hourCondition.pressure),
      visibility: convertKilometersToUnit(hourCondition.visibility),
    };
  }
);

export default convertUnitsAccordingToSettings;
