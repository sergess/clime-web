import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Mist from 'public/icons/mist.svg';

import { omitUnusedIconProps } from '../utils';

export const MistIcon = (props: IconProps): ReactElement => (
  <Icon as={Mist} {...omitUnusedIconProps(props)} />
);

export default MistIcon;
