import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards } from 'client/hooks';

import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData =
  (): UseHourlyForecastCardData | null => {
    const { hourly } = useForecastCards();
    const temperatureUnit = useAtomValue(temperatureUnitAtom);
    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

    return useMemo(() => {
      if (!hourly) return null;

      return hourly.map((item) => ({
        ...item,
        temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
      }));
    }, [hourly, temperatureUnit]);
  };

export default useHourlyForecastCardData;
