import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightRainShowersNight from '../../public/icons/light-rain-showers-night.svg';

export const LightRainShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightRainShowersNight} {...props} />
);

export default LightRainShowersNightIcon;
