import { DayCondition } from 'server/types';
import {
  convertDateTimeToISOString,
  extractValidWeatherStateId,
} from 'server/utils';

import { convertConditionFromApiToHourCondition } from '../convert-condition-from-api-to-hour-condition.util';
import { convertDaySummaryConditionFromApiToDaySummaryCondition } from '../convert-day-summary-condition-from-api-to-day-summary-condition.util';

import { DayConditionFromApi } from '../../types';

export const convertDayConditionFromApiToDayCondition = (
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
      convertConditionFromApiToHourCondition(hourCondition, sunrise, sunset)
    ),
    summary: {
      morning: convertDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.mrng,
        false
      ),
      day: convertDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.day,
        false
      ),
      evening: convertDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.evng,
        true
      ),
      night: convertDaySummaryConditionFromApiToDaySummaryCondition(
        dayCondition.smr.nght,
        true
      ),
    },
  };
};

export default convertDayConditionFromApiToDayCondition;
