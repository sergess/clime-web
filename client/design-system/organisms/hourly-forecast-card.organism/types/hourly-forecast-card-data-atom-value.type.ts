import { WeatherStateId, HourConditionVariant } from 'common/types';

export type HourlyForecastCardDataAtomValue = Array<{
  variant: HourConditionVariant;
  night: boolean;
  stateId: WeatherStateId | null;
  temperature: number | string;
  time: string;
}>;

export default HourlyForecastCardDataAtomValue;
