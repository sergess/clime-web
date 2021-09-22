import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Play from 'public/icons/play.svg';

export const PlayIcon = (props: IconProps): ReactElement => (
  <Icon as={Play} {...props} />
);

export default PlayIcon;
