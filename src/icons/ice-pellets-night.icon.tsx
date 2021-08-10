import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IcePelletsNight from '../../public/icons/ice-pellets-night.svg';

export const IcePelletsNightIcon = (props: IconProps): ReactElement => (
  <Icon as={IcePelletsNight} {...props} />
);

export default IcePelletsNightIcon;
