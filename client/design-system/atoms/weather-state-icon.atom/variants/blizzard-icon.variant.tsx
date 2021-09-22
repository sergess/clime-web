import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Blizzard from 'public/icons/blizzard.svg';

import { omitUnusedIconProps } from '../utils';

export const BlizzardIcon = (props: IconProps): ReactElement => (
  <Icon as={Blizzard} {...omitUnusedIconProps(props)} />
);

export default BlizzardIcon;
