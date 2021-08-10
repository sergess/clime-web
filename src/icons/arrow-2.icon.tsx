import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Arrow2 from '../../public/icons/arrow-2.svg';

export const Arrow2Icon = (props: IconProps): ReactElement => (
  <Icon as={Arrow2} {...props} />
);

export default Arrow2Icon;
