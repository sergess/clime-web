import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightRain from '../../public/icons/light-rain.svg';

export const LightRainIcon = (props: IconProps): ReactElement => (
  <Icon as={LightRain} {...props} />
);

export default LightRainIcon;
