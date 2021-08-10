import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightIcePellets from '../../public/icons/light-ice-pellets.svg';

export const LightIcePelletsIcon = (props: IconProps): ReactElement => (
  <Icon as={LightIcePellets} {...props} />
);

export default LightIcePelletsIcon;
