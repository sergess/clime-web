import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SunnyNight from 'public/icons/sunny-night.svg';

export const SunnyNightIcon = (props: IconProps): ReactElement => (
  <Icon as={SunnyNight} {...props} />
);

export default SunnyNightIcon;
