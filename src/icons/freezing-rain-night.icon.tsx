import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingRainNight from '../../public/icons/freezing-rain-night.svg';

export const FreezingRainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingRainNight} {...props} />
);

export default FreezingRainNightIcon;
