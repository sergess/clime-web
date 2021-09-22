import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSand from 'public/icons/blowing-sand.svg';

import { omitUnusedIconProps } from '../utils';

export const BlowingSandIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSand} {...omitUnusedIconProps(props)} />
);

export default BlowingSandIcon;
