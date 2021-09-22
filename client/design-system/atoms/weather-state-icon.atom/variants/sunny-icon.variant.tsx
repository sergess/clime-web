import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Sunny from 'public/icons/sunny.svg';
import SunnyNight from 'public/icons/sunny-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const SunnyIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? SunnyNight : Sunny} {...iconProps} />
);

SunnyIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default SunnyIcon;
