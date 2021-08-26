import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySleet from 'public/icons/heavy-sleet.svg';

export const HeavySleetIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySleet} {...props} />
);

export default HeavySleetIcon;
