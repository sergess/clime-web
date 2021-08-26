import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import ThunderstormNight from 'public/icons/thunderstorm-night.svg';

export const ThunderstormNightIcon = (props: IconProps): ReactElement => (
  <Icon as={ThunderstormNight} {...props} />
);

export default ThunderstormNightIcon;
