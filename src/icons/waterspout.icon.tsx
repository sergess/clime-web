import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Waterspout from '../../public/icons/waterspout.svg';

export const WaterspoutIcon = (props: IconProps): ReactElement => (
  <Icon as={Waterspout} {...props} />
);

export default WaterspoutIcon;
