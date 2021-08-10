import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightRainShowers from '../../public/icons/light-rain-showers.svg';

export const LightRainShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={LightRainShowers} {...props} />
);

export default LightRainShowersIcon;
