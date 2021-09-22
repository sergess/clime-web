import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Squall from 'public/icons/squall.svg';

import { omitUnusedIconProps } from '../utils';

export const SquallIcon = (props: IconProps): ReactElement => (
  <Icon as={Squall} {...omitUnusedIconProps(props)} />
);

export default SquallIcon;
