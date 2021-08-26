import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSnow from 'public/icons/light-snow.svg';

export const LightSnowIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSnow} {...props} />
);

export default LightSnowIcon;
