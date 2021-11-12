import { WEATHER_STATE } from 'common/constants';

import { HourCondition } from 'server/types';
import {
  convertDateTimeToISOString,
  isUtcStringNight,
  extractValidWeatherStateId,
} from 'server/utils';

import { ConditionFromApi } from '../../types';

export const mapConditionFromApiToHourCondition = (
  condition: ConditionFromApi,
  sunrise: string | null,
  sunset: string | null
): HourCondition => {
  const dateTime = convertDateTimeToISOString(condition.dt) as string;

  return {
    variant: WEATHER_STATE,
    night: isUtcStringNight(dateTime, sunrise, sunset),
    dateTime,
    stateId: extractValidWeatherStateId(condition.sid),
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
    uvIndex: condition.uv,
  };
};

export default mapConditionFromApiToHourCondition;
