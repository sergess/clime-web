import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightIcePelletsShowers from 'public/icons/light-ice-pellets-showers.svg';

export const LightIcePelletsShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={LightIcePelletsShowers} {...props} />
);

export default LightIcePelletsShowersIcon;
