import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useCards } from 'client/hooks';

import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData =
  (): UseHourlyForecastCardData | null => {
    const { hourlyForecast } = useCards();
    const temperatureUnit = useAtomValue(temperatureUnitAtom);
    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

    return useMemo(() => {
      if (!hourlyForecast) return null;

      return hourlyForecast.map((item) => ({
        ...item,
        temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
      }));
    }, [hourlyForecast, temperatureUnit]);
  };

export default useHourlyForecastCardData;
