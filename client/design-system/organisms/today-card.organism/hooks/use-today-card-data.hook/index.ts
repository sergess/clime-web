import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
  timeFormatAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
  convertMillibarsTo,
  convertKilometersTo,
  defaultToDash,
} from 'client/utils';
import { useForecastCards, useFormattedDate } from 'client/hooks';

import { FORMAT_H12, FORMAT_H24 } from 'client/constants';

import { UseTodayCardData } from '../../types';

export const useTodayCardData = (): UseTodayCardData | null => {
  const { today } = useForecastCards();

  const changeTimeFormat = useFormattedDate();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);
  const distanceUnit = useAtomValue(distanceUnitAtom);
  const timeFormat = useAtomValue(timeFormatAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);
  const convertKilometersToUnit = convertKilometersTo(distanceUnit);

  const setTimeFormat = changeTimeFormat(FORMAT_H12, FORMAT_H24);

  return useMemo(() => {
    if (!today) return null;

    return {
      ...today,
      dateTime: defaultToDash(setTimeFormat(today.dateTime)),
      temperature: defaultToDash(convertFahrenheitToUnit(today.temperature)),
      feelsLikeTemperature: defaultToDash(
        convertFahrenheitToUnit(today.feelsLikeTemperature)
      ),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(today.maxTemperature)
      ),
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(today.minTemperature)
      ),
      windSpeed: defaultToDash(convertKilometersPerHourToUnit(today.windSpeed)),
      precipitationLevel: defaultToDash(
        convertMillimetersToUnit(today.precipitationLevel)
      ),
      pressure: defaultToDash(convertMillibarsToUnit(today.pressure)),
      precipitationChance: defaultToDash(today.precipitationChance),
      humidity: defaultToDash(today.humidity),
      uvIndex: defaultToDash(today.uvIndex),
      visibility: defaultToDash(convertKilometersToUnit(today.visibility)),
    };
  }, [
    today,
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    pressureUnit,
    distanceUnit,
    timeFormat,
  ]) as UseTodayCardData;
};

export default useTodayCardData;
