import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import IcePelletsShowers from 'public/icons/ice-pellets-showers.svg';
import IcePelletsShowersNight from 'public/icons/ice-pellets-showers-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const IcePelletsShowersIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon
    as={night ? IcePelletsShowersNight : IcePelletsShowers}
    {...iconProps}
  />
);

IcePelletsShowersIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default IcePelletsShowersIcon;
