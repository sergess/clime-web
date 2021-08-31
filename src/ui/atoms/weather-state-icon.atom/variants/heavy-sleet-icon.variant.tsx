import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavySleet from 'public/icons/heavy-sleet.svg';
import HeavySleetNight from 'public/icons/heavy-sleet-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavySleetIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavySleetNight : HeavySleet} {...iconProps} />
);

HeavySleetIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavySleetIcon;
