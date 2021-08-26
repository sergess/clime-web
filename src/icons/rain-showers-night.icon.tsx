import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import RainShowersNight from 'public/icons/rain-showers-night.svg';

export const RainShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={RainShowersNight} {...props} />
);

export default RainShowersNightIcon;
