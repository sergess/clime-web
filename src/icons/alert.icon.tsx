import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Alert from '../../public/icons/alert.svg';

export const AlertIcon = (props: IconProps): ReactElement => (
  <Icon as={Alert} {...props} />
);

export default AlertIcon;
