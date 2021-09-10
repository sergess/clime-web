import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingDust from 'public/icons/blowing-dust.svg';

export const BlowingDustIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingDust} {...props} />
);

export default BlowingDustIcon;
