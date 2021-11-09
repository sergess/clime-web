import { WeatherStateId } from '../weather-state-id.type';
import { HourConditionVariant } from '../hour-condition-variant.type';

export type HourlyForecastCardData = Array<{
  variant: HourConditionVariant;
  dateTime: string;
  night: boolean;
  stateId: WeatherStateId | null;
  temperature: number | null;
  time: string;
}>;

export default HourlyForecastCardData;
