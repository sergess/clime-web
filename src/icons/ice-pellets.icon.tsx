import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IcePellets from '../../public/icons/ice-pellets.svg';

export const IcePelletsIcon = (props: IconProps): ReactElement => (
  <Icon as={IcePellets} {...props} />
);

export default IcePelletsIcon;
