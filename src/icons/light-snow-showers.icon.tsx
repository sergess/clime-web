import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSnowShowers from 'public/icons/light-snow-showers.svg';

export const LightSnowShowersIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSnowShowers} {...props} />
);

export default LightSnowShowersIcon;
