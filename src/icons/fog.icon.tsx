import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Fog from '../../public/icons/fog.svg';

export const FogIcon = (props: IconProps): ReactElement => (
  <Icon as={Fog} {...props} />
);

export default FogIcon;
