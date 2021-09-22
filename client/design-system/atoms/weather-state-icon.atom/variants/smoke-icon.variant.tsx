import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Smoke from 'public/icons/smoke.svg';

import { omitUnusedIconProps } from '../utils';

export const SmokeIcon = (props: IconProps): ReactElement => (
  <Icon as={Smoke} {...omitUnusedIconProps(props)} />
);

export default SmokeIcon;
