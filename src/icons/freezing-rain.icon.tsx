import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingRain from 'public/icons/freezing-rain.svg';

export const FreezingRainIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingRain} {...props} />
);

export default FreezingRainIcon;
