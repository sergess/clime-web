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
import { FORMAT_H12, FORMAT_H12_SHORT, FORMAT_H24 } from 'client/constants';
import { HourlyDetailedForecastItem } from '../../types';

export const useCardData = (): HourlyDetailedForecastItem[] | null => {
  const changeTimeFormat = useFormattedDate();

  const { hourlyDetailed } = useForecastCards();

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
      const formatH12 =
        item.variant === WEATHER_STATE ? FORMAT_H12_SHORT : FORMAT_H12;
      const setTimeFormat = changeTimeFormat(formatH12, FORMAT_H24);

      return {
        ...item,
        dateTime: defaultToDash(setTimeFormat(item.dateTime)),
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
