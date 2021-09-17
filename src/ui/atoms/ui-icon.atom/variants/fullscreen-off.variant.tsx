import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FullscreenOff from 'public/icons/fullscreen-off.svg';

export const FullscreenOffIcon = (props: IconProps): ReactElement => (
  <Icon as={FullscreenOff} {...props} />
);

export default FullscreenOffIcon;
