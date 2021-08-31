import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import FreezingRain from 'public/icons/freezing-rain.svg';
import FreezingRainNight from 'public/icons/freezing-rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const FreezingRainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? FreezingRainNight : FreezingRain} {...iconProps} />
);

FreezingRainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default FreezingRainIcon;
