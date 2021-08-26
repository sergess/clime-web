import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import SnowNight from 'public/icons/snow-night.svg';

export const SnowNightIcon = (props: IconProps): ReactElement => (
  <Icon as={SnowNight} {...props} />
);

export default SnowNightIcon;
