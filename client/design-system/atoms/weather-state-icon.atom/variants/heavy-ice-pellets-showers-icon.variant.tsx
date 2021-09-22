import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavyIcePelletsShowers from 'public/icons/heavy-ice-pellets-showers.svg';
import HeavyIcePelletsShowersNight from 'public/icons/heavy-ice-pellets-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavyIcePelletsShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon
    as={night ? HeavyIcePelletsShowersNight : HeavyIcePelletsShowers}
    {...iconProps}
  />
);

HeavyIcePelletsShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavyIcePelletsShowersIcon;
