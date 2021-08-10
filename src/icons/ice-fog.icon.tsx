import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IceFog from '../../public/icons/ice-fog.svg';

export const IceFogIcon = (props: IconProps): ReactElement => (
  <Icon as={IceFog} {...props} />
);

export default IceFogIcon;
