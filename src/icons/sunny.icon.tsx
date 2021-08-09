import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Sunny from '../../public/icons/sunny.svg';

export const SunnyIcon = (props: IconProps): ReactElement => (
  <Icon as={Sunny} {...props} />
);

export default SunnyIcon;
