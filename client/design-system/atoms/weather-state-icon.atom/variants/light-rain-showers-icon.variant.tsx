import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightRainShowers from 'public/icons/light-rain-showers.svg';
import LightRainShowersNight from 'public/icons/light-rain-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightRainShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightRainShowersNight : LightRainShowers} {...iconProps} />
);

LightRainShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightRainShowersIcon;
