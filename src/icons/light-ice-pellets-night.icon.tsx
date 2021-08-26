import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightIcePelletsNight from 'public/icons/light-ice-pellets-night.svg';

export const LightIcePelletsNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightIcePelletsNight} {...props} />
);

export default LightIcePelletsNightIcon;
