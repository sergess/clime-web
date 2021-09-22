import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Plus from 'public/icons/plus.svg';

export const PlusIcon = (props: IconProps): ReactElement => (
  <Icon as={Plus} {...props} />
);

export default PlusIcon;
