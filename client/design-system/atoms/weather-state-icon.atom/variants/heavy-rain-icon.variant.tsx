import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavyRain from 'public/icons/heavy-rain.svg';
import HeavyRainNight from 'public/icons/heavy-rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavyRainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavyRainNight : HeavyRain} {...iconProps} />
);

HeavyRainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavyRainIcon;
