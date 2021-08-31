import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavyFreezingRain from 'public/icons/heavy-freezing-rain.svg';
import HeavyFreezingRainNight from 'public/icons/heavy-freezing-rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavyFreezingRainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon
    as={night ? HeavyFreezingRainNight : HeavyFreezingRain}
    {...iconProps}
  />
);

HeavyFreezingRainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavyFreezingRainIcon;
