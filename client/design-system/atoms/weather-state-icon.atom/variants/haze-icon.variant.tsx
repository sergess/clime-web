import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Haze from 'public/icons/haze.svg';
import HazeNight from 'public/icons/haze-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const HazeIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? HazeNight : Haze} {...iconProps} />
);

HazeIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default HazeIcon;
