import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Sunset from 'public/icons/sunset.svg';

export const SunsetIcon = (props: IconProps): ReactElement => (
  <Icon as={Sunset} {...props} />
);

export default SunsetIcon;
