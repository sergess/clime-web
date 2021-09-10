import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingSpray from 'public/icons/freezing-spray.svg';

export const FreezingSprayIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingSpray} {...props} />
);

export default FreezingSprayIcon;
