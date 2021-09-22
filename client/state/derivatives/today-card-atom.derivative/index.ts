import { atom } from 'jotai';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
  defaultToDash,
  toFixedNIfNotNil,
} from 'client/utils';
import { pressureUnitAtom } from 'client/state/atoms';
import { PressureUnit } from 'client/types';

import { currentConditionAtom } from '../current-condition-atom.derivative';
import { forecastAtomFamily } from '../forecast-atom-family.derivative';

const roundIfNotNil = toFixedNIfNotNil(0);
const toFixedOneIfNotNil = toFixedNIfNotNil(1);
const toFixedTwoIfNotNil = toFixedNIfNotNil(2);

// [TODO] add 'night' prop for icons
// [TODO] add 'locationExact'
export const todayCardAtom = atom((get) => {
  const currentCondition = get(currentConditionAtom);
  const todayForecast = get(forecastAtomFamily(0));
  const pressureUnit = get(pressureUnitAtom);

  const windDegree = currentCondition.wd || 0;

  return {
    location: 'Minneapolis, MN',
    // [TODO] See 'timeZone' in LOCATION_DATA
    time: currentCondition.dt,
    // [TODO] add stateText calculation (st|stn)
    stateText: currentCondition.st,

    currentTemperature: roundIfNotNil(currentCondition.t),
    weatherStateId: currentCondition.sid,
    feelsLikeTemperature: roundIfNotNil(currentCondition.fl),
    precipitationChance: defaultToDash(currentCondition.prc),
    windDegree: defaultToDash(currentCondition.wd),
    windSpeed: toFixedOneIfNotNil(currentCondition.ws),
    precipitation: toFixedTwoIfNotNil(currentCondition.pr),
    humidity: defaultToDash(currentCondition.h),
    pressure:
      pressureUnit === PressureUnit.INCH
        ? toFixedOneIfNotNil(currentCondition.p)
        : roundIfNotNil(currentCondition.p),
    maxTemperature: roundIfNotNil(todayForecast.tmx),
    minTemperature: roundIfNotNil(todayForecast.tmn),
    uvIndex: defaultToDash(todayForecast.uv),
    windAzimuth: convertWindDegreeToAzimuth(windDegree),
    windDirectionAngle: calculateOppositeAngle(windDegree),
  };
});

export default todayCardAtom;
