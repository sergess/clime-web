import { useMemo } from 'react';
import { atom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';

import { HourlyForecastCardData } from 'common/types';

import { HourlyForecastCardDataAtomValue } from '../../types';

export const useHourlyForecastCardDataAtomValue = (
  hourlyForecastCardData: HourlyForecastCardData
): HourlyForecastCardDataAtomValue => {
  const hourlyForecastCardDataAtom = useMemo(
    () =>
      atom<HourlyForecastCardDataAtomValue>((get) => {
        const temperatureUnit = get(temperatureUnitAtom);
        const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

        return hourlyForecastCardData.map((item) => ({
          ...item,
          temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
        }));
      }),
    [hourlyForecastCardData]
  );

  return useAtomValue(hourlyForecastCardDataAtom);
};

export default useHourlyForecastCardDataAtomValue;
