import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import OverlaysFull from 'public/icons/overlays-full.svg';

export const OverlaysFullIcon = (props: IconProps): ReactElement => (
  <Icon as={OverlaysFull} {...props} />
);

export default OverlaysFullIcon;
