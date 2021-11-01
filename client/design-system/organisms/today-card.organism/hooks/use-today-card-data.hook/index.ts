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
import { useCards } from 'client/hooks';

import { UseTodayCardData } from '../../types';

export const useTodayCardData = (): UseTodayCardData | null => {
  const { today } = useCards();

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
      visibility: defaultToDash(
        convertKilometersToUnit(today?.visibility ?? null)
      ),
    }),
    [
      today,
      temperatureUnit,
      windSpeedUnit,
      precipitationUnit,
      pressureUnit,
      distanceUnit,
    ]
  ) as UseTodayCardData;

  return today ? todayCardData : null;
};

export default useTodayCardData;
