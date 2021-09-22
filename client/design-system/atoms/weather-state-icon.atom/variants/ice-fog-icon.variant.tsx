import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IceFog from 'public/icons/ice-fog.svg';

import { omitUnusedIconProps } from '../utils';

export const IceFogIcon = (props: IconProps): ReactElement => (
  <Icon as={IceFog} {...omitUnusedIconProps(props)} />
);

export default IceFogIcon;
