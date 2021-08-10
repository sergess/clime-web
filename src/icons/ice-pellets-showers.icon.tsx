import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IcePelletsShowers from '../../public/icons/ice-pellets-showers.svg';

export const IcePelletsShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={IcePelletsShowers} {...props} />
);

export default IcePelletsShowersIcon;
