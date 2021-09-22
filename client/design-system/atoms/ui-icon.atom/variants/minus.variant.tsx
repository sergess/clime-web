import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Minus from 'public/icons/minus.svg';

export const MinusIcon = (props: IconProps): ReactElement => (
  <Icon as={Minus} {...props} />
);

export default MinusIcon;
