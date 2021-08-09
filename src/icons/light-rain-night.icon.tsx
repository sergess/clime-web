import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightRainNight from '../../public/icons/light-rain-night.svg';

export const LightRainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightRainNight} {...props} />
);

export default LightRainNightIcon;
