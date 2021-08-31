import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import LightIcePellets from 'public/icons/light-ice-pellets.svg';
import LightIcePelletsNight from 'public/icons/light-ice-pellets-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const LightIcePelletsIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? LightIcePelletsNight : LightIcePellets} {...iconProps} />
);

LightIcePelletsIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default LightIcePelletsIcon;
