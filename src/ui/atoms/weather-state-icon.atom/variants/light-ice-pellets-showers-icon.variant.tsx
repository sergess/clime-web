import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightIcePelletsShowers from 'public/icons/light-ice-pellets-showers.svg';
import LightIcePelletsShowersNight from 'public/icons/light-ice-pellets-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightIcePelletsShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon
    as={night ? LightIcePelletsShowersNight : LightIcePelletsShowers}
    {...iconProps}
  />
);

LightIcePelletsShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightIcePelletsShowersIcon;
