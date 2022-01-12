import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { useForecastCards } from 'client/hooks';
import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
  convertMillibarsTo,
  defaultToDash,
} from 'client/utils';

import { HourlyDetailedForecastItem } from '../../types';

export const useCardData = (): HourlyDetailedForecastItem[] | null => {
  const { hourlyDetailed } = useForecastCards();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);

  return useMemo(() => {
    if (!hourlyDetailed) return null;

    return hourlyDetailed.map((item) => ({
      ...item,
      temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
      feelsLikeTemperature: defaultToDash(
        convertFahrenheitToUnit(item.feelsLikeTemperature)
      ),
      windSpeed: defaultToDash(convertKilometersPerHourToUnit(item.windSpeed)),
      precipitationLevel: defaultToDash(
        convertMillimetersToUnit(item.precipitationLevel)
      ),
      pressure: defaultToDash(convertMillibarsToUnit(item.pressure)),
      precipitationChance: defaultToDash(item.precipitationChance),
      humidity: defaultToDash(item.humidity),
      uvIndex: defaultToDash(item.uvIndex),
    }));
  }, [
    hourlyDetailed,
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    pressureUnit,
  ]);
};

export default useCardData;
