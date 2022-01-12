import {
  WEATHER_TODAY,
  WEATHER_RADAR,
  TEN_DAY_WEATHER,
  HOURLY_WEATHER,
} from 'client/constants';

export type Page =
  | typeof WEATHER_TODAY
  | typeof WEATHER_RADAR
  | typeof TEN_DAY_WEATHER
  | typeof HOURLY_WEATHER;

export default Page;
