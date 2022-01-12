import { ReactElement } from 'react';

import { DropIconProps } from './types';

export const DropIcon = ({
  chance,
  width,
  height,
}: DropIconProps): ReactElement => {
  let src = '/icons/drop-100.svg';
  switch (true) {
    case chance <= 20:
      src = '/icons/drop-20.svg';
      break;
    case chance <= 40:
      src = '/icons/drop-40.svg';
      break;
    case chance <= 60:
      src = '/icons/drop-60.svg';
      break;
    case chance <= 80:
      src = '/icons/drop-80.svg';
      break;
    default:
      src = '/icons/drop-100.svg';
  }
  return <image href={src} width={width} height={height} />;
};

export default DropIcon;
