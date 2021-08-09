import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SleetNight from '../../public/icons/sleet-night.svg';

export const SleetNightIcon = (props: IconProps): ReactElement => (
  <Icon as={SleetNight} {...props} />
);

export default SleetNightIcon;
