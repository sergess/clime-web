import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSleetNight from '../../public/icons/light-sleet-night.svg';

export const LightSleetNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSleetNight} {...props} />
);

export default LightSleetNightIcon;
