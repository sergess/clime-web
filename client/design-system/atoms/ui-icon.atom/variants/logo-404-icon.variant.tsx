import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Logo404 from 'public/icons/404.svg';

export const Logo404Icon = (props: IconProps): ReactElement => (
  <Icon as={Logo404} {...props} />
);

export default Logo404Icon;
