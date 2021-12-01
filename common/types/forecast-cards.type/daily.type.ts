import { WeatherStateId } from '../weather-state-id.type';

export type Daily = Array<{
  dateTime: string;
  stateId: WeatherStateId | null;
  minTemperature: number | null;
  maxTemperature: number | null;
  date: string;
  night: boolean;
}>;

export default Daily;
