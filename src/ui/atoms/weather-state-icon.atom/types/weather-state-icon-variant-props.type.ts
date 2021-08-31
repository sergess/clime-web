import { IconProps } from '@chakra-ui/react';

export const weatherStateIconVariantDefaultProps = {
  night: false,
};

export type WeatherStateIconVariantProps = {
  night?: boolean;
} & IconProps &
  typeof weatherStateIconVariantDefaultProps;

export default WeatherStateIconVariantProps;
