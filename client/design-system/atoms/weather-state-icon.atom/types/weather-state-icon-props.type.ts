import { IconProps } from '@chakra-ui/react';

import { WeatherStateId } from 'common/types';

export const weatherStateIconDefaultProps = {
  night: false,
};

export type WeatherStateIconProps = {
  night?: boolean;
  stateId: WeatherStateId | null;
} & IconProps &
  typeof weatherStateIconDefaultProps;

export default WeatherStateIconProps;
