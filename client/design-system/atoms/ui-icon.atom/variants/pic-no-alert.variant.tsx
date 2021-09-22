import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import PicNoAlert from 'public/icons/pic-no-alert.svg';

export const PicNoAlertIcon = (props: IconProps): ReactElement => (
  <Icon as={PicNoAlert} {...props} />
);

export default PicNoAlertIcon;
