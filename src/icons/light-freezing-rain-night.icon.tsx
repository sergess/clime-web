import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightFreezingRainNight from 'public/icons/light-freezing-rain-night.svg';

export const LightFreezingRainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightFreezingRainNight} {...props} />
);

export default LightFreezingRainNightIcon;
