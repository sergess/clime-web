import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';

import { useForecastCards, useFormattedDate } from 'client/hooks';
import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  timeFormatAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
  convertMillibarsTo,
  defaultToDash,
} from 'client/utils';

import { WEATHER_STATE } from 'common/constants';
import { H_MM, H_MMAAA, HAAA, MMMD } from 'client/constants';
import { TimeFormat } from 'client/types';
import { HourlyDetailedForecastItem } from '../../types';

export const useCardData = (): HourlyDetailedForecastItem[] | null => {
  const { hourlyDetailed } = useForecastCards();

  const changeDateFormatTo = useFormattedDate();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);
  const timeFormat = useAtomValue(timeFormatAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);

  return useMemo(() => {
    if (!hourlyDetailed) return null;

    return hourlyDetailed.map((item) => {
      let format;

      if (timeFormat === TimeFormat.H12) {
        format = item.variant === WEATHER_STATE ? HAAA : H_MMAAA;
      } else {
        format = H_MM;
      }

      const setDateTimeFormat = changeDateFormatTo(format);
      const setDateFormat = changeDateFormatTo(MMMD);

      return {
        ...item,
        date: defaultToDash(setDateFormat(item.dateTime)),
        dateTime: defaultToDash(setDateTimeFormat(item.dateTime)),
        temperature: defaultToDash(convertFahrenheitToUnit(item.temperature)),
        feelsLikeTemperature: defaultToDash(
          convertFahrenheitToUnit(item.feelsLikeTemperature)
        ),
        windSpeed: defaultToDash(
          convertKilometersPerHourToUnit(item.windSpeed)
        ),
        precipitationLevel: defaultToDash(
          convertMillimetersToUnit(item.precipitationLevel)
        ),
        pressure: defaultToDash(convertMillibarsToUnit(item.pressure)),
        precipitationChance: defaultToDash(item.precipitationChance),
        humidity: defaultToDash(item.humidity),
        uvIndex: defaultToDash(item.uvIndex),
      };
    });
  }, [
    hourlyDetailed,
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    pressureUnit,
    timeFormat,
  ]);
};

export default useCardData;
