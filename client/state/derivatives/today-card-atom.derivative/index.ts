import { atom } from 'jotai';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
  defaultToDash,
  isUtcStringNight,
  formatUtcString,
} from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';

import { currentConditionAtom } from '../current-condition-atom.derivative';
import { forecastAtomFamily } from '../forecast-atom-family.derivative';

// [TODO] add 'locationExact'
export const todayCardAtom = atom((get) => {
  const currentCondition = get(currentConditionAtom);
  const locationData = get(locationDataAtom);
  const forecastForToday = get(forecastAtomFamily(0));

  const { sr, ss } = forecastForToday;
  const night = isUtcStringNight(currentCondition.dt, sr, ss);
  const windDegree = currentCondition.wd || 0;

  return {
    location: 'Minneapolis, MN',
    time: formatUtcString(
      currentCondition.dt,
      'h:mmaaa',
      locationData?.timeZone
    ),
    night,
    stateText: night
      ? currentCondition.stn || currentCondition.st
      : currentCondition.st,
    currentTemperature: defaultToDash(currentCondition.t),
    weatherStateId: currentCondition.sid,
    feelsLikeTemperature: defaultToDash(currentCondition.fl),
    precipitationChance: defaultToDash(currentCondition.prc),
    windDegree: defaultToDash(currentCondition.wd),
    windSpeed: defaultToDash(currentCondition.ws),
    precipitation: defaultToDash(currentCondition.pr),
    humidity: defaultToDash(currentCondition.h),
    pressure: defaultToDash(currentCondition.p),
    maxTemperature: defaultToDash(forecastForToday.tmx),
    minTemperature: defaultToDash(forecastForToday.tmn),
    uvIndex: defaultToDash(forecastForToday.uv),
    windAzimuth: convertWindDegreeToAzimuth(windDegree),
    windDirectionAngle: calculateOppositeAngle(windDegree),
  };
});

export default todayCardAtom;
