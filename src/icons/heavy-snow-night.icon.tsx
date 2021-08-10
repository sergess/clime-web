import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySnowNight from '../../public/icons/heavy-snow-night.svg';

export const HeavySnowNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySnowNight} {...props} />
);

export default HeavySnowNightIcon;
