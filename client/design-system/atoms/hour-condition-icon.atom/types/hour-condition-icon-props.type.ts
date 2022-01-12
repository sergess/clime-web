import { HourConditionVariant, WeatherStateId } from 'common/types';

export type HourConditionIconProps = {
  variant: HourConditionVariant;
  night?: boolean;
  stateId: WeatherStateId | null;
  height?: number;
  width?: number;
};

export default HourConditionIconProps;
