import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards } from 'client/hooks';

import { UseDailyForecastCardData } from '../../types';

export const useCardData = (): UseDailyForecastCardData | null => {
  const { daily } = useForecastCards();
  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

  return useMemo(() => {
    if (!daily) return null;

    return daily.map((item) => ({
      ...item,
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(item.minTemperature)
      ),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(item.maxTemperature)
      ),
    }));
  }, [daily, temperatureUnit]);
};

export default useCardData;
