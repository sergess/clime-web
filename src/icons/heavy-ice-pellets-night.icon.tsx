import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyIcePelletsNight from 'public/icons/heavy-ice-pellets-night.svg';

export const HeavyIcePelletsNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyIcePelletsNight} {...props} />
);

export default HeavyIcePelletsNightIcon;
