import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Rain from '../../public/icons/rain.svg';

export const RainIcon = (props: IconProps): ReactElement => (
  <Icon as={Rain} {...props} />
);

export default RainIcon;
