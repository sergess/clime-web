import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSpray from 'public/icons/blowing-spray.svg';

import { omitUnusedIconProps } from '../utils';

export const BlowingSprayIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSpray} {...omitUnusedIconProps(props)} />
);

export default BlowingSprayIcon;
