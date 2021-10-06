import { atom, Atom } from 'jotai';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertKilometersTo,
  convertMillimetersTo,
  convertMillibarsTo,
} from 'client/utils';

import { Condition } from 'common/types';

export const selectConversionsAwareConditionAtom = (
  currentConditionAtom: Atom<Condition>
): Atom<Condition> =>
  atom((get) => {
    const currentCondition = get(currentConditionAtom);

    const temperatureUnit = get(temperatureUnitAtom);
    const windSpeedUnit = get(windSpeedUnitAtom);
    const precipitationUnit = get(precipitationUnitAtom);
    const pressureUnit = get(pressureUnitAtom);
    const distanceUnit = get(distanceUnitAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
    const convertKilometersPerHourToUnit =
      convertKilometersPerHourTo(windSpeedUnit);
    const convertMillimetersToUnit = convertMillimetersTo(precipitationUnit);
    const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);
    const convertKilometersToUnit = convertKilometersTo(distanceUnit);

    return {
      ...currentCondition,
      t: convertFahrenheitToUnit(currentCondition.t),
      fl: convertFahrenheitToUnit(currentCondition.fl),
      dp: convertFahrenheitToUnit(currentCondition.dp),
      ws: convertKilometersPerHourToUnit(currentCondition.ws),
      wg: convertKilometersPerHourToUnit(currentCondition.wg),
      pr: convertMillimetersToUnit(currentCondition.pr),
      p: convertMillibarsToUnit(currentCondition.p),
      v: convertKilometersToUnit(currentCondition.v),
    };
  });

export default selectConversionsAwareConditionAtom;
