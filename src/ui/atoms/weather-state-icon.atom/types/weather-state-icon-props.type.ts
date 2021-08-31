import { IconProps } from '@chakra-ui/react';

import { WeatherStateId } from 'src/types';

export const weatherStateIconDefaultProps = {
  night: false,
};

export type WeatherStateIconProps = {
  night?: boolean;
  stateId: WeatherStateId;
} & IconProps &
  typeof weatherStateIconDefaultProps;

export default WeatherStateIconProps;
