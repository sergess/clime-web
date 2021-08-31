import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightSleet from 'public/icons/light-sleet.svg';
import LightSleetNight from 'public/icons/light-sleet-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightSleetIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightSleetNight : LightSleet} {...iconProps} />
);

LightSleetIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightSleetIcon;
