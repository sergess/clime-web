import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import BlowingSnow from '../../public/icons/blowing-snow.svg';

export const BlowingSnowIcon = (props: IconProps): ReactElement => (
  <Icon as={BlowingSnow} {...props} />
);

export default BlowingSnowIcon;
