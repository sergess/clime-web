import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import RainShowers from '../../public/icons/rain-showers.svg';

export const RainShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={RainShowers} {...props} />
);

export default RainShowersIcon;
