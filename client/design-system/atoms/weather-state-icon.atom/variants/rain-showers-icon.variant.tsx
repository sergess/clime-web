import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import RainShowers from 'public/icons/rain-showers.svg';
import RainShowersNight from 'public/icons/rain-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const RainShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? RainShowersNight : RainShowers} {...iconProps} />
);

RainShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default RainShowersIcon;
