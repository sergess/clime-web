import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useCards } from 'client/hooks';

import { UseDailyForecastCardData } from '../../types';

export const useDailyForecastCardData = (): UseDailyForecastCardData | null => {
  const { dailyForecast } = useCards();
  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

  return useMemo(() => {
    if (!dailyForecast) return null;

    return dailyForecast.map((item) => ({
      ...item,
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(item.minTemperature)
      ),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(item.maxTemperature)
      ),
    }));
  }, [dailyForecast, temperatureUnit]);
};

export default useDailyForecastCardData;
