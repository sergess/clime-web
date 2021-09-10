import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import ClimeLogoDark from 'public/icons/clime-logo-dark.svg';

export const ClimeLogoDarkIcon = (props: IconProps): ReactElement => (
  <Icon as={ClimeLogoDark} {...props} />
);

export default ClimeLogoDarkIcon;
