import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingDrizzle from 'public/icons/freezing-drizzle.svg';

import { omitUnusedIconProps } from '../utils';

export const FreezingDrizzleIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingDrizzle} {...omitUnusedIconProps(props)} />
);

export default FreezingDrizzleIcon;
