import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PinCard from '../../public/icons/pin-card.svg';

export const PinCardIcon = (props: IconProps): ReactElement => (
  <Icon as={PinCard} {...props} />
);

export default PinCardIcon;
