import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

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
import { useCards } from 'client/hooks';

import { UseTodayCardData } from '../../types';

export const useTodayCardData = (): UseTodayCardData | null => {
  const { today } = useCards();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);

  const todayCardData = useMemo(
    () => ({
      ...today,
      temperature: defaultToDash(
        convertFahrenheitToUnit(today?.temperature ?? null)
      ),
      feelsLikeTemperature: defaultToDash(
        convertFahrenheitToUnit(today?.feelsLikeTemperature ?? null)
      ),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(today?.maxTemperature ?? null)
      ),
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(today?.minTemperature ?? null)
      ),
      windSpeed: defaultToDash(
        convertKilometersPerHourToUnit(today?.windSpeed ?? null)
      ),
      precipitationLevel: defaultToDash(
        convertMillimetersToUnit(today?.precipitationLevel ?? null)
      ),
      pressure: defaultToDash(convertMillibarsToUnit(today?.pressure ?? null)),
      precipitationChance: defaultToDash(today?.precipitationChance),
      humidity: defaultToDash(today?.humidity),
      uvIndex: defaultToDash(today?.uvIndex),
    }),
    [today, temperatureUnit, windSpeedUnit, precipitationUnit, pressureUnit]
  ) as UseTodayCardData;

  return today ? todayCardData : null;
};

export default useTodayCardData;
