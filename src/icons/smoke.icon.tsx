import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Smoke from '../../public/icons/smoke.svg';

export const SmokeIcon = (props: IconProps): ReactElement => (
  <Icon as={Smoke} {...props} />
);

export default SmokeIcon;
