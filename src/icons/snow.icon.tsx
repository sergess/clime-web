import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Snow from 'public/icons/snow.svg';

export const SnowIcon = (props: IconProps): ReactElement => (
  <Icon as={Snow} {...props} />
);

export default SnowIcon;
