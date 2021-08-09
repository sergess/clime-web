import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyFreezingRainNight from '../../public/icons/heavy-freezing-rain-night.svg';

export const HeavyFreezingRainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyFreezingRainNight} {...props} />
);

export default HeavyFreezingRainNightIcon;
