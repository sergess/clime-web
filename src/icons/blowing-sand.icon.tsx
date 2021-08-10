import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSand from '../../public/icons/blowing-sand.svg';

export const BlowingSandIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSand} {...props} />
);

export default BlowingSandIcon;
