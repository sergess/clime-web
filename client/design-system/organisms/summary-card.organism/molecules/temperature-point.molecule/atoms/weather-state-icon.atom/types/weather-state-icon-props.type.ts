import { WeatherStateId } from 'common/types';

export type WeatherStateIconProps = {
  night?: boolean;
  stateId: WeatherStateId | null;
  width?: number;
  height?: number;
};

export default WeatherStateIconProps;
