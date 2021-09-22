import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import VolcanicAsh from 'public/icons/volcanic-ash.svg';

import { omitUnusedIconProps } from '../utils';

export const VolcanicAshIcon = (props: IconProps): ReactElement => (
  <Icon as={VolcanicAsh} {...omitUnusedIconProps(props)} />
);

export default VolcanicAshIcon;
