import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Drizzle from 'public/icons/drizzle.svg';

import { omitUnusedIconProps } from '../utils';

export const DrizzleIcon = (props: IconProps): ReactElement => (
  <Icon as={Drizzle} {...omitUnusedIconProps(props)} />
);

export default DrizzleIcon;
