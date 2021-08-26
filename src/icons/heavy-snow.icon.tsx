import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySnow from 'public/icons/heavy-snow.svg';

export const HeavySnowIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySnow} {...props} />
);

export default HeavySnowIcon;
