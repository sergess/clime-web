import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import VolcanicAsh from 'public/icons/volcanic-ash.svg';

export const VolcanicAshIcon = (props: IconProps): ReactElement => (
  <Icon as={VolcanicAsh} {...props} />
);

export default VolcanicAshIcon;
