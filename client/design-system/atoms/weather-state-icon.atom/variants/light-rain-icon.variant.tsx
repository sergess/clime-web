import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightRain from 'public/icons/light-rain.svg';
import LightRainNight from 'public/icons/light-rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightRainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightRainNight : LightRain} {...iconProps} />
);

LightRainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightRainIcon;
