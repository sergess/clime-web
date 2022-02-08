import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom, timeFormatAtom } from 'client/state/atoms';
import {
  changeTimeFormatTo,
  convertFahrenheitTo,
  defaultToDash,
} from 'client/utils';
import { useForecastCards, useLocationData } from 'client/hooks';

import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData =
  (): UseHourlyForecastCardData | null => {
    const { hourly } = useForecastCards();

    const location = useLocationData();

    const temperatureUnit = useAtomValue(temperatureUnitAtom);
    const timeFormat = useAtomValue(timeFormatAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
    const changeTimeFormat = changeTimeFormatTo(
      timeFormat,
      location,
      'h:mmaaa',
      'H:mm'
    );

    return useMemo(() => {
      if (!hourly) return null;

      return hourly.map((item) => ({
        ...item,
        time: defaultToDash(changeTimeFormat(item.time)),
        temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
      }));
    }, [hourly, temperatureUnit, timeFormat]);
  };

export default useHourlyForecastCardData;
