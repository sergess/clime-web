import { WeatherStateId, HourConditionVariant } from 'common/types';

export type UseHourlyForecastCardData = Array<{
  dateTime: string;
  variant: HourConditionVariant;
  night: boolean;
  stateId: WeatherStateId | null;
  temperature: number | string;
  time: string;
}>;

export default UseHourlyForecastCardData;
