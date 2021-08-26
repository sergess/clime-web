import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyFreezingRain from 'public/icons/heavy-freezing-rain.svg';

export const HeavyFreezingRainIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyFreezingRain} {...props} />
);

export default HeavyFreezingRainIcon;
