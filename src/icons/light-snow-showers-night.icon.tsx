import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightSnowShowersNight from 'public/icons/light-snow-showers-night.svg';

export const LightSnowShowersNightIcon = (props: IconProps): ReactElement => (
  <Icon as={LightSnowShowersNight} {...props} />
);

export default LightSnowShowersNightIcon;
