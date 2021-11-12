import { WeatherStateId } from '../weather-state-id.type';

export type DailyForecastCardData = Array<{
  dateTime: string;
  stateId: WeatherStateId | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  time: string;
}>;

export default DailyForecastCardData;
