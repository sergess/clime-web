import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySnowShowers from '../../public/icons/heavy-snow-showers.svg';

export const HeavySnowShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySnowShowers} {...props} />
);

export default HeavySnowShowersIcon;
