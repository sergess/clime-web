import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Sleet from 'public/icons/sleet.svg';
import SleetNight from 'public/icons/sleet-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const SleetIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? SleetNight : Sleet} {...iconProps} />
);

SleetIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default SleetIcon;
