import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { temperatureUnitAtom, timeFormatAtom } from 'client/state/atoms';
import { convertFahrenheitTo, defaultToDash } from 'client/utils';
import { useForecastCards, useFormattedDate } from 'client/hooks';
import { WEATHER_STATE } from 'common/constants';
import { HAAA, H_MMAAA, H_MM } from 'client/constants';

import { TimeFormat } from 'client/types';
import { UseHourlyForecastCardData } from '../../types';

export const useHourlyForecastCardData =
  (): UseHourlyForecastCardData | null => {
    const { hourly } = useForecastCards();

    const formatDate = useFormattedDate();
    const temperatureUnit = useAtomValue(temperatureUnitAtom);
    const timeFormat = useAtomValue(timeFormatAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);

    return useMemo(() => {
      if (!hourly) return null;

      let format = H_MM;

      return hourly.map((item) => {
        if (timeFormat === TimeFormat.H12) {
          format = item.variant === WEATHER_STATE ? HAAA : H_MMAAA;
        }

        const setDateTimeFormat = formatDate(format);

        return {
          ...item,
          dateTime: defaultToDash(setDateTimeFormat(item.dateTime)),
          temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
        };
      });
    }, [hourly, temperatureUnit, timeFormat]);
  };

export default useHourlyForecastCardData;
