import { SUNRISE, SUNSET, WEATHER_STATE } from 'client/constants';

export type HourlyConditionVariant =
  | typeof SUNSET
  | typeof SUNRISE
  | typeof WEATHER_STATE;

export default HourlyConditionVariant;
