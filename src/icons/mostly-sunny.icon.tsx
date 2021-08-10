import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import MostlySunny from '../../public/icons/mostly-sunny.svg';

export const MostlySunnyIcon = (props: IconProps): ReactElement => (
  <Icon as={MostlySunny} {...props} />
);

export default MostlySunnyIcon;
