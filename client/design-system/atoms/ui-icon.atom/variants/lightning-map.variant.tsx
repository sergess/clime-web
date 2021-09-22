import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import LightningMap from 'public/icons/lightning-map.svg';

export const LightningMapIcon = (props: IconProps): ReactElement => (
  <Icon as={LightningMap} {...props} />
);

export default LightningMapIcon;
