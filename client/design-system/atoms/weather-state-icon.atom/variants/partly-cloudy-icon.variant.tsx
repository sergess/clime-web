import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

import PartlyCloudy from 'public/icons/partly-cloudy.svg';
import PartlyCloudyNight from 'public/icons/partly-cloudy-night.svg';

import {
  WeatherStateIconVariantProps,
  weatherStateIconVariantDefaultProps,
} from '../types';

export const PartlyCloudyIcon = ({
  night = false,
  ...iconProps
}: WeatherStateIconVariantProps): ReactElement => (
  <Icon as={night ? PartlyCloudyNight : PartlyCloudy} {...iconProps} />
);

PartlyCloudyIcon.defaultProps = weatherStateIconVariantDefaultProps;

export default PartlyCloudyIcon;
