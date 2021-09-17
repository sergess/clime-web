import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PicMap from 'public/icons/pic-map.svg';

export const PicMapIcon = (props: IconProps): ReactElement => (
  <Icon as={PicMap} {...props} />
);

export default PicMapIcon;
