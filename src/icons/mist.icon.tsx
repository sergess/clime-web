import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Mist from '../../public/icons/mist.svg';

export const MistIcon = (props: IconProps): ReactElement => (
  <Icon as={Mist} {...props} />
);

export default MistIcon;
