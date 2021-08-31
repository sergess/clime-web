import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavySnowShowers from 'public/icons/heavy-snow-showers.svg';
import HeavySnowShowersNight from 'public/icons/heavy-snow-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavySnowShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavySnowShowersNight : HeavySnowShowers} {...iconProps} />
);

HeavySnowShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavySnowShowersIcon;
