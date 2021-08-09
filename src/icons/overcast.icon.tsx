import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Overcast from '../../public/icons/overcast.svg';

export const OvercastIcon = (props: IconProps): ReactElement => (
  <Icon as={Overcast} {...props} />
);

export default OvercastIcon;
