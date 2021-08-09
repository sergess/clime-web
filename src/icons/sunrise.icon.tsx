import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Sunrise from '../../public/icons/sunrise.svg';

export const SunriseIcon = (props: IconProps): ReactElement => (
  <Icon as={Sunrise} {...props} />
);

export default SunriseIcon;
