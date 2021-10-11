import { atom } from 'jotai';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
  defaultToDash,
  formatUtcString,
} from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';

import {
  hourConditionsFeedAtomFamily,
  dayConditionsFeedAtomFamily,
} from 'client/state/derivatives';

// [TODO] add 'locationExact'
export const todayCardAtom = atom((get) => {
  const currentHourCondition = get(hourConditionsFeedAtomFamily(0));
  const todayDayCondition = get(dayConditionsFeedAtomFamily(0));
  const locationData = get(locationDataAtom);

  const windDirection = currentHourCondition.windDirection || 0;

  return {
    location: 'Minneapolis, MN',
    time: formatUtcString(
      currentHourCondition.dateTime,
      'h:mmaaa',
      locationData?.timeZone
    ),
    night: currentHourCondition.night,
    stateText: currentHourCondition.night
      ? currentHourCondition.stateNightText || currentHourCondition.stateText
      : currentHourCondition.stateText,
    currentTemperature: defaultToDash(currentHourCondition.temperature),
    stateId: currentHourCondition.stateId,
    feelsLikeTemperature: defaultToDash(
      currentHourCondition.feelsLikeTemperature
    ),
    precipitationChance: defaultToDash(
      currentHourCondition.precipitationChance
    ),
    windSpeed: defaultToDash(currentHourCondition.windSpeed),
    precipitationLevel: defaultToDash(currentHourCondition.precipitationLevel),
    humidity: defaultToDash(currentHourCondition.humidity),
    pressure: defaultToDash(currentHourCondition.pressure),
    maxTemperature: defaultToDash(todayDayCondition.maxTemperature),
    minTemperature: defaultToDash(todayDayCondition.minTemperature),
    uvIndex: defaultToDash(todayDayCondition.uvIndex),
    windAzimuth: convertWindDegreeToAzimuth(windDirection),
    windDirectionAngle: calculateOppositeAngle(windDirection),
  };
});

export default todayCardAtom;
