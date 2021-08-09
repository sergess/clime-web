import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSnowNight from '../../public/icons/light-snow-night.svg';

export const LightSnowNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSnowNight} {...props} />
);

export default LightSnowNightIcon;
