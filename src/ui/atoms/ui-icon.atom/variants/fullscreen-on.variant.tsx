import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FullscreenOn from 'public/icons/fullscreen-on.svg';

export const FullscreenOnIcon = (props: IconProps): ReactElement => (
  <Icon as={FullscreenOn} {...props} />
);

export default FullscreenOnIcon;
