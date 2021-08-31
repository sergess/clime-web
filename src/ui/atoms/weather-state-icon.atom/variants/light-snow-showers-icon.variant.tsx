import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightSnowShowers from 'public/icons/light-snow-showers.svg';
import LightSnowShowersNight from 'public/icons/light-snow-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightSnowShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightSnowShowersNight : LightSnowShowers} {...iconProps} />
);

LightSnowShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightSnowShowersIcon;
