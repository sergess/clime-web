import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import HeavySleetNight from 'public/icons/heavy-sleet-night.svg';

export const HeavySleetNightIcon = (props: IconProps): ReactElement => (
  <Icon as={HeavySleetNight} {...props} />
);

export default HeavySleetNightIcon;
