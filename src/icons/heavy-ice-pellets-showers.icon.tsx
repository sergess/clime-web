import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyIcePelletsShowers from 'public/icons/heavy-ice-pellets-showers.svg';

export const HeavyIcePelletsShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyIcePelletsShowers} {...props} />
);

export default HeavyIcePelletsShowersIcon;
