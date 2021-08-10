import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Close from '../../public/icons/close.svg';

export const CloseIcon = (props: IconProps): ReactElement => (
  <Icon as={Close} {...props} />
);

export default CloseIcon;
