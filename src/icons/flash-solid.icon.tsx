import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import FlashSolid from '../../public/icons/flash-solid.svg';

export const FlashSolidIcon = (props: IconProps): ReactElement => (
  <Icon as={FlashSolid} {...props} />
);

export default FlashSolidIcon;
