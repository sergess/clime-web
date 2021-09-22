import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavyRainShowers from 'public/icons/heavy-rain-showers.svg';
import HeavyRainShowersNight from 'public/icons/heavy-rain-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavyRainShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavyRainShowersNight : HeavyRainShowers} {...iconProps} />
);

HeavyRainShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavyRainShowersIcon;
