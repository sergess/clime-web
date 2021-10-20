import { useMemo } from 'react';
import { atom } from 'jotai';
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

import { TodayCardData } from 'common/types';

import { TodayCardDataAtomValue } from '../../types';

export const useTodayCardDataAtomValue = (
  todayCardData: TodayCardData
): TodayCardDataAtomValue => {
  const todayCardDataAtom = useMemo(
    () =>
      atom<TodayCardDataAtomValue>((get) => {
        const temperatureUnit = get(temperatureUnitAtom);
        const windSpeedUnit = get(windSpeedUnitAtom);
        const precipitationUnit = get(precipitationUnitAtom);
        const pressureUnit = get(pressureUnitAtom);

        const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
        const convertKilometersPerHourToUnit =
          convertKilometersPerHourTo(windSpeedUnit);
        const convertMillimetersToUnit =
          convertMillimetersTo(precipitationUnit);
        const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);

        return {
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
          pressure: defaultToDash(
            convertMillibarsToUnit(todayCardData.pressure)
          ),
          precipitationChance: defaultToDash(todayCardData.precipitationChance),
          humidity: defaultToDash(todayCardData.humidity),
          uvIndex: defaultToDash(todayCardData.uvIndex),
        };
      }),
    [todayCardData]
  );

  return useAtomValue(todayCardDataAtom);
};

export default useTodayCardDataAtomValue;
