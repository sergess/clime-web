import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import WindDirection from 'public/icons/wind-direction.svg';

export const WindDirectionIcon = (props: IconProps): ReactElement => (
  <Icon as={WindDirection} {...props} />
);

export default WindDirectionIcon;
