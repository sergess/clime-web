import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightFreezingRain from 'public/icons/light-freezing-rain.svg';

export const LightFreezingRainIcon = (props: IconProps): ReactElement => (
  <Icon as={LightFreezingRain} {...props} />
);

export default LightFreezingRainIcon;
