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
  changeTimeFormatTo,
} from 'client/utils';
import { useForecastCards, useLocationData } from 'client/hooks';

import { UseTodayCardData } from '../../types';

export const useTodayCardData = (): UseTodayCardData | null => {
  const { today } = useForecastCards();

  const location = useLocationData();

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
  const changeTimeFormat = changeTimeFormatTo(
    timeFormat,
    location,
    'h:mmaaa',
    'H:mm'
  );

  return useMemo(() => {
    if (!today) return null;

    return {
      ...today,
      date: defaultToDash(changeTimeFormat(today.date)),
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
