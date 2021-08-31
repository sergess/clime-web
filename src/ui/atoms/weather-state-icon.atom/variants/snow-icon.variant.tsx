import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Snow from 'public/icons/snow.svg';
import SnowNight from 'public/icons/snow-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const SnowIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? SnowNight : Snow} {...iconProps} />
);

SnowIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default SnowIcon;
