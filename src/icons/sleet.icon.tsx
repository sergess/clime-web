import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Sleet from '../../public/icons/sleet.svg';

export const SleetIcon = (props: IconProps): ReactElement => (
  <Icon as={Sleet} {...props} />
);

export default SleetIcon;
