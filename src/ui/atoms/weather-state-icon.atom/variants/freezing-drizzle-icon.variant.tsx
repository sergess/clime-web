import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FreezingDrizzle from 'public/icons/freezing-drizzle.svg';

export const FreezingDrizzleIcon = (props: IconProps): ReactElement => (
  <Icon as={FreezingDrizzle} {...props} />
);

export default FreezingDrizzleIcon;
