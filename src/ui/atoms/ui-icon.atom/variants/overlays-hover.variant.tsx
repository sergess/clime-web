import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import OverlaysHover from 'public/icons/overlays-hover.svg';

export const OverlaysHoverIcon = (props: IconProps): ReactElement => (
  <Icon as={OverlaysHover} {...props} />
);

export default OverlaysHoverIcon;
