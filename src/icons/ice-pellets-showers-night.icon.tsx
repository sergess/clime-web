import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import IcePelletsShowersNight from '../../public/icons/ice-pellets-showers-night.svg';

export const IcePelletsShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={IcePelletsShowersNight} {...props} />
);

export default IcePelletsShowersNightIcon;
