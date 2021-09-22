import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavySnow from 'public/icons/heavy-snow.svg';
import HeavySnowNight from 'public/icons/heavy-snow-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavySnowIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavySnowNight : HeavySnow} {...iconProps} />
);

HeavySnowIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavySnowIcon;
