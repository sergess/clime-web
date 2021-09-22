import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Rain from 'public/icons/rain.svg';
import RainNight from 'public/icons/rain-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const RainIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? RainNight : Rain} {...iconProps} />
);

RainIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default RainIcon;
