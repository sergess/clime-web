import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSpray from '../../public/icons/blowing-spray.svg';

export const BlowingSprayIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSpray} {...props} />
);

export default BlowingSprayIcon;
