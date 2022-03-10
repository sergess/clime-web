import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';
import { formatInTimeZone } from 'date-fns-tz';

import { temperatureUnitAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards, useLocationData } from 'client/hooks';

import { UTC } from 'server/constants';

import { UseDailyForecastCardData } from '../../types';

export const useCardData = (): UseDailyForecastCardData | null => {
  const { daily } = useForecastCards();
  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

  const location = useLocationData();

  return useMemo(() => {
    if (!daily) return null;

    return daily.map((item) => ({
      ...item,
      date: formatInTimeZone(item.dateTime, location?.timeZone || UTC, 'MMM d'),
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
