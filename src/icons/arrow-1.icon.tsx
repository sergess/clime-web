import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Arrow1 from '../../public/icons/arrow-1.svg';

export const Arrow1Icon = (props: IconProps): ReactElement => (
  <Icon as={Arrow1} {...props} />
);

export default Arrow1Icon;
