import { atom } from 'jotai';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
  defaultToDash,
  formatUtcString,
  isLocationTheSameAsLocationFromBrowser,
  getExtendedLocationName,
  getLocationName,
} from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';

import {
  hourConditionsFeedAtomFamily,
  dayConditionsFeedAtomFamily,
} from 'client/state/derivatives';

export const todayCardAtom = atom((get) => {
  const currentHourCondition = get(hourConditionsFeedAtomFamily(0));
  const todayDayCondition = get(dayConditionsFeedAtomFamily(0));
  const locationData = get(locationDataAtom);

  const windDirection = currentHourCondition.windDirection || 0;
  const locationExact =
    !!locationData &&
    isLocationTheSameAsLocationFromBrowser({
      latitude: locationData?.latitude,
      longitude: locationData?.longitude,
    });

  return {
    locationExact,
    location: locationExact
      ? getExtendedLocationName(locationData)
      : getLocationName(locationData),
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
