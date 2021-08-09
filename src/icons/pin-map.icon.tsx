import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PinMap from '../../public/icons/pin-map.svg';

export const PinMapIcon = (props: IconProps): ReactElement => (
  <Icon as={PinMap} {...props} />
);

export default PinMapIcon;
