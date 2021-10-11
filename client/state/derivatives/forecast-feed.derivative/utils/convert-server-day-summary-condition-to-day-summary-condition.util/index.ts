import { DaySummaryCondition } from 'client/types';

import { DaySummaryCondition as ServerDaySummaryCondition } from 'common/types';

export const convertServerDaySummaryConditionToDaySummaryCondition = (
  daySummaryCondition: ServerDaySummaryCondition | null,
  night: boolean
): DaySummaryCondition | null =>
  daySummaryCondition && {
    night,
    stateId: daySummaryCondition.sid,
    stateText: daySummaryCondition.st,
    stateNightText: daySummaryCondition.stn,
    temperature: daySummaryCondition.t,
    windSpeed: daySummaryCondition.ws,
    windDirectionwd: daySummaryCondition.wd,
    precipitationLevel: daySummaryCondition.pr,
    precipitationChance: daySummaryCondition.prc,
  };

export default convertServerDaySummaryConditionToDaySummaryCondition;
