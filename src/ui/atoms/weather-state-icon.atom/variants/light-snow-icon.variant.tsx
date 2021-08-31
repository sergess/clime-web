import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightSnow from 'public/icons/light-snow.svg';
import LightSnowNight from 'public/icons/light-snow-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightSnowIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightSnowNight : LightSnow} {...iconProps} />
);

LightSnowIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightSnowIcon;
