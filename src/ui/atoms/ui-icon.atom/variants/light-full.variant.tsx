import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightFull from 'public/icons/light-full.svg';

export const LightFullIcon = (props: IconProps): ReactElement => (
  <Icon as={LightFull} {...props} />
);

export default LightFullIcon;
