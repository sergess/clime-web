import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Wind from 'public/icons/wind.svg';

export const WindIcon = (props: IconProps): ReactElement => (
  <Icon as={Wind} {...props} />
);

export default WindIcon;
