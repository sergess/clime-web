import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
  convertMillibarsTo,
  convertKilometersTo,
  defaultToDash,
} from 'client/utils';

import { TodayCardData } from 'common/types';

import { UseTodayCardData } from '../../types';

export const useTodayCardData = (
  todayCardData: TodayCardData
): UseTodayCardData => {
  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);
  const distanceUnit = useAtomValue(distanceUnitAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);
  const convertKilometersToUnit = convertKilometersTo(distanceUnit);

  return useMemo(
    () => ({
      ...todayCardData,
      temperature: defaultToDash(
        convertFahrenheitToUnit(todayCardData.temperature)
      ),
      feelsLikeTemperature: defaultToDash(
        convertFahrenheitToUnit(todayCardData.feelsLikeTemperature)
      ),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(todayCardData.maxTemperature)
      ),
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(todayCardData.minTemperature)
      ),
      windSpeed: defaultToDash(
        convertKilometersPerHourToUnit(todayCardData.windSpeed)
      ),
      precipitationLevel: defaultToDash(
        convertMillimetersToUnit(todayCardData.precipitationLevel)
      ),
      pressure: defaultToDash(convertMillibarsToUnit(todayCardData.pressure)),
      precipitationChance: defaultToDash(todayCardData.precipitationChance),
      humidity: defaultToDash(todayCardData.humidity),
      uvIndex: defaultToDash(todayCardData.uvIndex),
      visibility: defaultToDash(
        convertKilometersToUnit(todayCardData.visibility)
      ),
    }),
    [
      todayCardData,
      temperatureUnit,
      windSpeedUnit,
      precipitationUnit,
      pressureUnit,
      distanceUnit,
    ]
  );
};

export default useTodayCardData;
