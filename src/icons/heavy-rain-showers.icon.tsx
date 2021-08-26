import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyRainShowers from 'public/icons/heavy-rain-showers.svg';

export const HeavyRainShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyRainShowers} {...props} />
);

export default HeavyRainShowersIcon;
