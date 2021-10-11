import { atom } from 'jotai';

import { convertUnitsAccordingToSettings } from './utils';

import { forecastFeedAtom } from '../forecast-feed.derivative';
import { settingsAtom } from '../settings-atom.derivative';

export const hourConditionsFeedAtom = atom((get) => {
  const hourConditions = get(forecastFeedAtom).hourConditionsFeed;
  const settings = get(settingsAtom);

  const convertUnits = convertUnitsAccordingToSettings(settings);

  return hourConditions.map(convertUnits);
});

export default hourConditionsFeedAtom;
