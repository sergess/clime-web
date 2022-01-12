import { useMemo } from 'react';
import { useAtomValue } from 'jotai/utils';
import last from 'ramda/src/last';
import head from 'ramda/src/head';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertMillimetersTo,
} from 'client/utils';
import { useForecastCards } from 'client/hooks';

import { ChartOption, ChartPoint } from '../../types';

export const useChartData = (activeChart: ChartOption): ChartPoint[] | null => {
  const { summary } = useForecastCards();

  const temperatureUnit = useAtomValue(temperatureUnitAtom);
  const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
  const precipitationUnit = useAtomValue(precipitationUnitAtom);

  const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
  const convertKilometersPerHourToUnit =
    convertKilometersPerHourTo(windSpeedUnit);
  const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);

  const points = useMemo(
    () =>
      summary?.map(
        ({
          night,
          stateId,
          period,
          temperature,
          windSpeed,
          precipitationLevel,
          precipitationChance,
          windAzimuth,
          windDirectionAngle,
        }) =>
          ({
            visible: true,
            period,
            night,
            stateId,
            windAzimuth,
            windDirectionAngle,
            precipitationLevel: convertMillimetersToUnit(precipitationLevel),
            ...(activeChart === ChartOption.TEMPERATURE && {
              y: convertFahrenheitToUnit(temperature),
            }),
            ...(activeChart === ChartOption.PRECIPITATION && {
              y: precipitationChance,
            }),
            ...(activeChart === ChartOption.WIND_SPEED && {
              y: convertKilometersPerHourToUnit(windSpeed),
            }),
          } as ChartPoint)
      ) ?? [],
    [summary, activeChart, temperatureUnit, windSpeedUnit, precipitationUnit]
  );

  if (!summary) return null;

  return [
    {
      ...head(points),
      visible: false,
    } as ChartPoint,
    ...points,
    {
      ...last(points),
      visible: false,
    } as ChartPoint,
  ];
};

export default useChartData;
