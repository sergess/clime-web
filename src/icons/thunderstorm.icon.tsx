import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Thunderstorm from 'public/icons/thunderstorm.svg';

export const ThunderstormIcon = (props: IconProps): ReactElement => (
  <Icon as={Thunderstorm} {...props} />
);

export default ThunderstormIcon;
