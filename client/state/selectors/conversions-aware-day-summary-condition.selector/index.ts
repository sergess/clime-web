import { atom, Atom } from 'jotai';

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

import { DaySummaryCondition } from 'common/types';

export const selectConversionsAwareDaySummaryConditionAtom = (
  daySummaryConditionAtom: Atom<DaySummaryCondition | null>
): Atom<DaySummaryCondition | null> =>
  atom<DaySummaryCondition | null>((get) => {
    const daySummaryCondition = get(daySummaryConditionAtom);

    if (!daySummaryCondition) return daySummaryCondition;

    const temperatureUnit = get(temperatureUnitAtom);
    const windSpeedUnit = get(windSpeedUnitAtom);
    const precipitationUnit = get(precipitationUnitAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
    const convertKilometersPerHourToUnit =
      convertKilometersPerHourTo(windSpeedUnit);
    const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);

    return {
      ...daySummaryCondition,
      t: convertFahrenheitToUnit(daySummaryCondition.t),
      ws: convertKilometersPerHourToUnit(daySummaryCondition.ws),
      pr: convertMillimetersToUnit(daySummaryCondition.pr),
    };
  });

export default selectConversionsAwareDaySummaryConditionAtom;
