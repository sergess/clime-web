import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';

import { HourlyForecastCardData } from 'common/types';

import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData = (
  hourlyForecastCardData: HourlyForecastCardData
): UseHourlyForecastCardData => {
  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

  return useMemo(
    () =>
      hourlyForecastCardData.map((item) => ({
        ...item,
        temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
      })),
    [hourlyForecastCardData, temperatureUnit]
  );
};

export default useHourlyForecastCardData;
