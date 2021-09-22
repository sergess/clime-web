import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingSpray from 'public/icons/freezing-spray.svg';

import { omitUnusedIconProps } from '../utils';

export const FreezingSprayIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingSpray} {...omitUnusedIconProps(props)} />
);

export default FreezingSprayIcon;
