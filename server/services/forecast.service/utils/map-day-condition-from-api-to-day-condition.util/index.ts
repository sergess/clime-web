import { DayPeriod } from 'common/types';

import { DayCondition } from 'server/types';
import {
  convertDateTimeToISOString,
  extractValidWeatherStateId,
} from 'server/utils';

import { mapConditionFromApiToHourCondition } from '../map-condition-from-api-to-hour-condition.util';
import { mapDaySummaryConditionFromApiToDaySummaryCondition } from '../map-day-summary-condition-from-api-to-day-summary-condition.util';

import { DayConditionFromApi } from '../../types';

export const mapDayConditionFromApiToDayCondition = (
  dayCondition: DayConditionFromApi
): DayCondition => {
  const sunrise = convertDateTimeToISOString(dayCondition.sr);
  const sunset = convertDateTimeToISOString(dayCondition.ss);

  return {
    dateTime: convertDateTimeToISOString(dayCondition.dt) as string,
    stateId: extractValidWeatherStateId(dayCondition.sid),
    stateText: dayCondition.st,
    stateNightText: dayCondition.stn,
    minTemperature: dayCondition.tmn,
    maxTemperature: dayCondition.tmx,
    feelsLikeTemperature: dayCondition.fl,
    dewPoint: dayCondition.dp,
    windSpeed: dayCondition.ws,
    windDirection: dayCondition.wd,
    windGust: dayCondition.wg,
    precipitationLevel: dayCondition.pr,
    precipitationChance: dayCondition.prc,
    visibility: dayCondition.v,
    humidity: dayCondition.h,
    pressure: dayCondition.p,
    sunrise,
    sunset,
    moonrise: convertDateTimeToISOString(dayCondition.mr),
    moonset: convertDateTimeToISOString(dayCondition.ms),
    uvIndex: dayCondition.uv,
    hourly: dayCondition.hly.map((hourCondition) =>
      mapConditionFromApiToHourCondition(hourCondition, sunrise, sunset)
    ),
    summary: {
      morning: mapDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.mrng,
        DayPeriod.MORNING,
        false
      ),
      day: mapDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.day,
        DayPeriod.DAY,
        false
      ),
      evening: mapDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.evng,
        DayPeriod.EVENING,
        false
      ),
      night: mapDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.nght,
        DayPeriod.NIGHT,
        true
      ),
    },
  };
};

export default mapDayConditionFromApiToDayCondition;
