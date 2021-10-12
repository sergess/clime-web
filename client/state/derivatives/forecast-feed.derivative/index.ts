import { atom } from 'jotai';
import omit from 'ramda/src/omit';

import { serverForecastFeedAtom } from 'client/state/atoms';

import {
  DayCondition as ServerDayCondition,
  Condition as ServerCondition,
} from 'common/types';

import {
  convertServerConditionToHourCondition,
  convertServerDayConditionToDayCondition,
  getUpToDateHourConditions,
  getUpToDateDayConditions,
  buildHourConditionsFeed,
} from './utils';

export const forecastFeedAtom = atom((get) => {
  const serverForecastFeed = get(serverForecastFeedAtom);

  const upToDateDayConditions = getUpToDateDayConditions(
    serverForecastFeed?.frst ?? ([] as ServerDayCondition[])
  );

  const convertedDayConditions = upToDateDayConditions.map(
    convertServerDayConditionToDayCondition
  );
  const currentDayCondition = convertedDayConditions[0];

  const currentHourCondition = convertServerConditionToHourCondition(
    serverForecastFeed?.cur ?? ({} as ServerCondition),
    currentDayCondition?.sunrise ?? null,
    currentDayCondition?.sunset ?? null
  );

  const hourConditionsFeed = buildHourConditionsFeed(convertedDayConditions);

  return {
    dayConditionsFeed: convertedDayConditions.map(
      omit(['hourly', 'summary', 'tides'])
    ),
    hourConditionsFeed: getUpToDateHourConditions(
      currentHourCondition,
      hourConditionsFeed
    ),
  };
});

export default forecastFeedAtom;
