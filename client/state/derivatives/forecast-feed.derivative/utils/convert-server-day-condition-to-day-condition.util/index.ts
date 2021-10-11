import { DayCondition } from 'client/types';
import { convertDateTimeToUtcString } from 'client/utils';

import { DayCondition as ServerDayCondition } from 'common/types';

import { convertServerConditionToHourCondition } from '../convert-server-condition-to-hour-condition.util';
import { convertServerDaySummaryConditionToDaySummaryCondition } from '../convert-server-day-summary-condition-to-day-summary-condition.util';

export const convertServerDayConditionToDayCondition = (
  dayCondition: ServerDayCondition
): DayCondition => {
  const dateTime = convertDateTimeToUtcString(dayCondition.dt) as string;
  const sunrise = convertDateTimeToUtcString(dayCondition.sr);
  const sunset = convertDateTimeToUtcString(dayCondition.ss);

  return {
    dateTime,
    stateId: dayCondition.sid,
    stateText: dayCondition.st,
    stateNightText: dayCondition.stn,
    minTemperature: dayCondition.tmn,
    maxTemperature: dayCondition.tmx,
    feelsLikeTemperature: dayCondition.fl,
    dewPoint: dayCondition.dp,
    windSpeed: dayCondition.ws,
    windDirection: dayCondition.wd,
    windGust: dayCondition.wg,
    precipitationChance: dayCondition.prc,
    visibility: dayCondition.v,
    humidity: dayCondition.h,
    pressure: dayCondition.p,
    sunrise,
    sunset,
    moonrise: convertDateTimeToUtcString(dayCondition.mr),
    moonset: convertDateTimeToUtcString(dayCondition.ms),
    uvIndex: dayCondition.uv,
    hourly: dayCondition.hly.map((hourCondition) =>
      convertServerConditionToHourCondition(hourCondition, sunrise, sunset)
    ),
    summary: {
      morning: convertServerDaySummaryConditionToDaySummaryCondition(
        dayCondition.smr.mrng,
        false
      ),
      day: convertServerDaySummaryConditionToDaySummaryCondition(
        dayCondition.smr.day,
        false
      ),
      evening: convertServerDaySummaryConditionToDaySummaryCondition(
        dayCondition.smr.evng,
        true
      ),
      night: convertServerDaySummaryConditionToDaySummaryCondition(
        dayCondition.smr.nght,
        true
      ),
    },
    // [TODO] Do we need to convert tides?
    tides: dayCondition.tds,
  };
};

export default convertServerDayConditionToDayCondition;
