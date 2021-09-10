import { IconProps } from '@chakra-ui/react';

import { WeatherStateId } from 'client/types';

export const weatherStateIconDefaultProps = {
  night: false,
};

export type WeatherStateIconProps = {
  night?: boolean;
  stateId: WeatherStateId;
} & IconProps &
  typeof weatherStateIconDefaultProps;

export default WeatherStateIconProps;
