import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSnow from 'public/icons/blowing-snow.svg';

import { omitUnusedIconProps } from '../utils';

export const BlowingSnowIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSnow} {...omitUnusedIconProps(props)} />
);

export default BlowingSnowIcon;
