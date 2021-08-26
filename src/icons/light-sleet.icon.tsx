import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSleet from 'public/icons/light-sleet.svg';

export const LightSleetIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSleet} {...props} />
);

export default LightSleetIcon;
