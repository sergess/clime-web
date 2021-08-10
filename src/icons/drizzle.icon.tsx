import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Drizzle from '../../public/icons/drizzle.svg';

export const DrizzleIcon = (props: IconProps): ReactElement => (
  <Icon as={Drizzle} {...props} />
);

export default DrizzleIcon;
