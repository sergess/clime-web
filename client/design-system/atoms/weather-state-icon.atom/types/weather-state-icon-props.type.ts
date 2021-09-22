import { IconProps } from '@chakra-ui/react';

export const weatherStateIconDefaultProps = {
  night: false,
};

export type WeatherStateIconProps = {
  night?: boolean;
  stateId: string | null;
} & IconProps &
  typeof weatherStateIconDefaultProps;

export default WeatherStateIconProps;
