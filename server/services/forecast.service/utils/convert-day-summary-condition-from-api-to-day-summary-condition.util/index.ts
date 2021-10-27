import { DayPeriod } from 'common/types';

import { DaySummaryCondition } from 'server/types';
import { extractValidWeatherStateId } from 'server/utils';

import { DaySummaryConditionFromApi } from '../../types';

export const convertDaySummaryConditionFromApiToDaySummaryCondition = (
  daySummaryCondition: DaySummaryConditionFromApi | null,
  period: DayPeriod,
  night: boolean
): DaySummaryCondition | null =>
  daySummaryCondition && {
    night,
    period,
    stateId: extractValidWeatherStateId(daySummaryCondition.sid),
    temperature: daySummaryCondition.t,
    windSpeed: daySummaryCondition.ws,
    windDirection: daySummaryCondition.wd,
    precipitationLevel: daySummaryCondition.pr,
    precipitationChance: daySummaryCondition.prc,
  };

export default convertDaySummaryConditionFromApiToDaySummaryCondition;
