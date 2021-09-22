import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import MyLocation from 'public/icons/my-location.svg';

export const MyLocationIcon = (props: IconProps): ReactElement => (
  <Icon as={MyLocation} {...props} />
);

export default MyLocationIcon;
