import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyRain from 'public/icons/heavy-rain.svg';

export const HeavyRainIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyRain} {...props} />
);

export default HeavyRainIcon;
