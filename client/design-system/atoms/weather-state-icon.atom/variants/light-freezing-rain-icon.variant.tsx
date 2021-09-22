import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightFreezingRain from 'public/icons/light-freezing-rain.svg';
import LightFreezingRainNight from 'public/icons/light-freezing-rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightFreezingRainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon
    as={night ? LightFreezingRainNight : LightFreezingRain}
    {...iconProps}
  />
);

LightFreezingRainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightFreezingRainIcon;
