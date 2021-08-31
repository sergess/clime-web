import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import Thunderstorm from 'public/icons/thunderstorm.svg';
import ThunderstormNight from 'public/icons/thunderstorm-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const ThunderstormIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? ThunderstormNight : Thunderstorm} {...iconProps} />
);

ThunderstormIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default ThunderstormIcon;
