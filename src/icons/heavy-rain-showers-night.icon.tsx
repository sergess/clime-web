import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyRainShowersNight from 'public/icons/heavy-rain-showers-night.svg';

export const HeavyRainShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyRainShowersNight} {...props} />
);

export default HeavyRainShowersNightIcon;
