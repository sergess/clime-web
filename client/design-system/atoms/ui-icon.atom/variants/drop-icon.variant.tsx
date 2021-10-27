import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Drop20 from 'public/icons/drop-20.svg';
import Drop40 from 'public/icons/drop-40.svg';
import Drop60 from 'public/icons/drop-60.svg';
import Drop80 from 'public/icons/drop-80.svg';
import Drop100 from 'public/icons/drop-100.svg';

export const DropIcon = ({
  chance,
  ...rest
}: {
  chance: number;
} & IconProps): ReactElement => {
  if (chance <= 20) {
    return <Icon as={Drop20} {...rest} />;
  }

  if (chance <= 40) {
    return <Icon as={Drop40} {...rest} />;
  }

  if (chance <= 60) {
    return <Icon as={Drop60} {...rest} />;
  }

  if (chance <= 80) {
    return <Icon as={Drop80} {...rest} />;
  }

  return <Icon as={Drop100} {...rest} />;
};

export default DropIcon;
