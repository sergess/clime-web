import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightLine from 'public/icons/light-line.svg';

export const LightLineIcon = (props: IconProps): ReactElement => (
  <Icon as={LightLine} {...props} />
);

export default LightLineIcon;
