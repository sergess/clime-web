import { SUNRISE, SUNSET, WEATHER_STATE } from 'common/constants';

export type HourConditionVariant =
  | typeof SUNSET
  | typeof SUNRISE
  | typeof WEATHER_STATE;

export default HourConditionVariant;
