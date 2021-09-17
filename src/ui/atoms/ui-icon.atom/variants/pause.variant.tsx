import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Pause from 'public/icons/pause.svg';

export const PauseIcon = (props: IconProps): ReactElement => (
  <Icon as={Pause} {...props} />
);

export default PauseIcon;
