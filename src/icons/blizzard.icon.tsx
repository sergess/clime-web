import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Blizzard from '../../public/icons/blizzard.svg';

export const BlizzardIcon = (props: IconProps): ReactElement => (
  <Icon as={Blizzard} {...props} />
);

export default BlizzardIcon;
