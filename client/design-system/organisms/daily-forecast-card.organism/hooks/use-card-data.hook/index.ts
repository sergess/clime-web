import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards, useFormattedDate } from 'client/hooks';

import { MMMD } from 'client/constants';

import { UseDailyForecastCardData } from '../../types';

export const useCardData = (): UseDailyForecastCardData | null => {
  const formatDate = useFormattedDate();
  const { daily } = useForecastCards();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

  const setDateFormat = formatDate(MMMD);

  return useMemo(() => {
    if (!daily) return null;

    return daily.map((item) => ({
      ...item,
      date: defaultToDash(setDateFormat(item.dateTime)),
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
