import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';
import { formatInTimeZone } from 'date-fns-tz';

import { useForecastCards, useLocationData } from 'client/hooks';
import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
  convertMillibarsTo,
  defaultToDash,
} from 'client/utils';
import { UTC } from 'server/constants';
import { DailyDetailedForecastItem } from '../../types';

export const useCardData = (): DailyDetailedForecastItem[] | null => {
  const location = useLocationData();

  const { dailyDetailed } = useForecastCards();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);
  const pressureUnit = useAtomValue(pressureUnitAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
  const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);

  return useMemo(() => {
    if (!dailyDetailed) return null;

    return dailyDetailed.map((item) => ({
      ...item,
      date: formatInTimeZone(item.dateTime, location?.timeZone || UTC, 'MMM d'),
      dewPoint: defaultToDash(convertFahrenheitToUnit(item.dewPoint)),
      maxTemperature: defaultToDash(
        convertFahrenheitToUnit(item.maxTemperature)
      ),
      minTemperature: defaultToDash(
        convertFahrenheitToUnit(item.minTemperature)
      ),
      windSpeed: defaultToDash(convertKilometersPerHourToUnit(item.windSpeed)),
      precipitationLevel: defaultToDash(
        convertMillimetersToUnit(item.precipitationLevel)
      ),
      pressure: defaultToDash(convertMillibarsToUnit(item.pressure)),
      precipitationChance: defaultToDash(item.precipitationChance),
      humidity: defaultToDash(item.humidity),
      uvIndex: defaultToDash(item.uvIndex),
    }));
  }, [
    dailyDetailed,
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    pressureUnit,
  ]);
};

export default useCardData;
