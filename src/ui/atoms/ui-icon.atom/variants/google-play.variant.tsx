import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import GooglePlay from 'public/icons/google-play.svg';

export const GooglePlayIcon = (props: IconProps): ReactElement => (
  <Icon as={GooglePlay} {...props} />
);

export default GooglePlayIcon;
