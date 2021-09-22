import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Fog from 'public/icons/fog.svg';

import { omitUnusedIconProps } from '../utils';

export const FogIcon = (props: IconProps): ReactElement => (
  <Icon as={Fog} {...omitUnusedIconProps(props)} />
);

export default FogIcon;
