import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import RainNight from 'public/icons/rain-night.svg';

export const RainNightIcon = (props: IconProps): ReactElement => (
  <Icon as={RainNight} {...props} />
);

export default RainNightIcon;
