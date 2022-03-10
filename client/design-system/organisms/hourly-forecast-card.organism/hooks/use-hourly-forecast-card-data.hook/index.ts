import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom, timeFormatAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards, useFormattedDate } from 'client/hooks';
import { WEATHER_STATE } from 'common/constants';
import { HAAA, H_MMAAA } from 'client/constants';

import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData =
  (): UseHourlyForecastCardData | null => {
    const { hourly } = useForecastCards();

    const changeTimeFormat = useFormattedDate();
    const temperatureUnit = useAtomValue(temperatureUnitAtom);
    const timeFormat = useAtomValue(timeFormatAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

    return useMemo(() => {
      if (!hourly) return null;

      return hourly.map((item) => {
        const formatH12 = item.variant === WEATHER_STATE ? HAAA : H_MMAAA;
        const setTimeFormat = changeTimeFormat(formatH12);

        return {
          ...item,
          dateTime: defaultToDash(setTimeFormat(item.dateTime)),
          temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
        };
      });
    }, [hourly, temperatureUnit, timeFormat]);
  };

export default useHourlyForecastCardData;
