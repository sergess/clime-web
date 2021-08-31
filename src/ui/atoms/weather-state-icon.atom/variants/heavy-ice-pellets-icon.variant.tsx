import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import HeavyIcePellets from 'public/icons/heavy-ice-pellets.svg';
import HeavyIcePelletsNight from 'public/icons/heavy-ice-pellets-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HeavyIcePelletsIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HeavyIcePelletsNight : HeavyIcePellets} {...iconProps} />
);

HeavyIcePelletsIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HeavyIcePelletsIcon;
