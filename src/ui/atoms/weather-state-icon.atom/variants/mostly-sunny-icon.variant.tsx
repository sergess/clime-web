import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import MostlySunny from 'public/icons/mostly-sunny.svg';
import MostlySunnyNight from 'public/icons/mostly-sunny-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const MostlySunnyIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? MostlySunnyNight : MostlySunny} {...iconProps} />
);

MostlySunnyIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default MostlySunnyIcon;
