import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavyIcePellets from 'public/icons/heavy-ice-pellets.svg';

export const HeavyIcePelletsIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavyIcePellets} {...props} />
);

export default HeavyIcePelletsIcon;
