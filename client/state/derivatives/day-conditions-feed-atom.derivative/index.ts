import { atom } from 'jotai';

import {
  temperatureUnitAtom,
  windSpeedUnitAtom,
  pressureUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import { DayCondition } from 'client/types';

import { convertUnitsAccordingToSettings } from './utils';

import { forecastFeedAtom } from '../forecast-feed.derivative';

export const dayConditionsFeedAtom = atom<DayCondition[]>((get) => {
  const dayConditions = get(forecastFeedAtom).dayConditionsFeed;
  const temperature = get(temperatureUnitAtom);
  const windSpeed = get(windSpeedUnitAtom);
  const pressure = get(pressureUnitAtom);
  const distance = get(distanceUnitAtom);

  const convertUnits = convertUnitsAccordingToSettings({
    temperature,
    windSpeed,
    pressure,
    distance,
  });

  return dayConditions.map(convertUnits);
});

export default dayConditionsFeedAtom;
