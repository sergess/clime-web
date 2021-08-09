import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import MostlySunnyNight from '../../public/icons/mostly-sunny-night.svg';

export const MostlySunnyNightIcon = (props: IconProps): ReactElement => (
  <Icon as={MostlySunnyNight} {...props} />
);

export default MostlySunnyNightIcon;
