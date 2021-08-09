import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySnowShowersNight from '../../public/icons/heavy-snow-showers-night.svg';

export const HeavySnowShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySnowShowersNight} {...props} />
);

export default HeavySnowShowersNightIcon;
