import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyRainNight from '../../public/icons/heavy-rain-night.svg';

export const HeavyRainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyRainNight} {...props} />
);

export default HeavyRainNightIcon;
