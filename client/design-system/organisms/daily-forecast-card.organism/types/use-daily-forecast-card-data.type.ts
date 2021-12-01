import { WeatherStateId } from 'common/types';

export type UseDailyForecastCardData = Array<{
  stateId: WeatherStateId | null;
  minTemperature: number | string;
  maxTemperature: number | string;
  date: string;
}>;

export default UseDailyForecastCardData;
