import { HourCondition } from 'client/types';
import { convertDateTimeToISOString, isUtcStringNight } from 'client/utils';
import { WEATHER_STATE } from 'client/constants';

import { Condition as ServerCondition } from 'common/types';

export const convertServerConditionToHourCondition = (
  condition: ServerCondition,
  sunrise: string | null,
  sunset: string | null
): HourCondition => {
  const dateTime = convertDateTimeToISOString(condition.dt) as string;

  return {
    variant: WEATHER_STATE,
    night: isUtcStringNight(dateTime, sunrise, sunset),
    dateTime,
    stateId: condition.sid,
    stateText: condition.st,
    stateNightText: condition.stn,
    temperature: condition.t,
    feelsLikeTemperature: condition.fl,
    dewPoint: condition.dp,
    windSpeed: condition.ws,
    windDirection: condition.wd,
    windGust: condition.wg,
    precipitationLevel: condition.pr,
    precipitationChance: condition.prc,
    visibility: condition.v,
    humidity: condition.h,
    pressure: condition.p,
  };
};

export default convertServerConditionToHourCondition;
