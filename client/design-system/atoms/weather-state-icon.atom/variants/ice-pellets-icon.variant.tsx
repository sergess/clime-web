import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import IcePellets from 'public/icons/ice-pellets.svg';
import IcePelletsNight from 'public/icons/ice-pellets-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const IcePelletsIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? IcePelletsNight : IcePellets} {...iconProps} />
);

IcePelletsIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default IcePelletsIcon;
