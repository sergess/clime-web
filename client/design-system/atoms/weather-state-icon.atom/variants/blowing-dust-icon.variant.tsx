import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingDust from 'public/icons/blowing-dust.svg';

import { omitUnusedIconProps } from '../utils';

export const BlowingDustIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingDust} {...omitUnusedIconProps(props)} />
);

export default BlowingDustIcon;
