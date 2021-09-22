import { atom, Atom } from 'jotai';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import {
  convertFahrenheitTo,
  convertKilometersPerHourTo,
  convertKilometersTo,
  convertMillibarsTo,
} from 'client/utils';

import { DayCondition } from 'common/types';

export const selectConversionsAwareDayConditionAtom = (
  dayConditionAtom: Atom<DayCondition>
): Atom<DayCondition> =>
  atom<DayCondition>((get) => {
    const dayCondition = get(dayConditionAtom);

    const temperatureUnit = get(temperatureUnitAtom);
    const windSpeedUnit = get(windSpeedUnitAtom);
    const pressureUnit = get(pressureUnitAtom);
    const distanceUnit = get(distanceUnitAtom);

    const convertFahrenheitToUnit = convertFahrenheitTo(temperatureUnit);
    const convertKilometersPerHourToUnit =
      convertKilometersPerHourTo(windSpeedUnit);
    const convertMillibarsToUnit = convertMillibarsTo(pressureUnit);
    const convertKilometersToUnit = convertKilometersTo(distanceUnit);

    return {
      ...dayCondition,
      tmn: convertFahrenheitToUnit(dayCondition.tmn),
      tmx: convertFahrenheitToUnit(dayCondition.tmx),
      fl: convertFahrenheitToUnit(dayCondition.fl),
      dp: convertFahrenheitToUnit(dayCondition.dp),
      ws: convertKilometersPerHourToUnit(dayCondition.ws),
      wg: convertKilometersPerHourToUnit(dayCondition.wg),
      p: convertMillibarsToUnit(dayCondition.p),
      v: convertKilometersToUnit(dayCondition.v),
    };
  });

export default selectConversionsAwareDayConditionAtom;
