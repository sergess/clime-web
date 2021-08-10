import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Squall from '../../public/icons/squall.svg';

export const SquallIcon = (props: IconProps): ReactElement => (
  <Icon as={Squall} {...props} />
);

export default SquallIcon;
