import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Overcast from 'public/icons/overcast.svg';

import { omitUnusedIconProps } from '../utils';

export const OvercastIcon = (props: IconProps): ReactElement => (
  <Icon as={Overcast} {...omitUnusedIconProps(props)} />
);

export default OvercastIcon;
