import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import OverlaysDefault from 'public/icons/overlays-default.svg';

export const OverlaysDefaultIcon = (props: IconProps): ReactElement => (
  <Icon as={OverlaysDefault} {...props} />
);

export default OverlaysDefaultIcon;
