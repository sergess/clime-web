import { ReactElement } from 'react';
import Image from 'next/image';
import { PrecipitationImageProps } from './types';

export const PrecipitationImage = ({
  chance,
  width,
  height,
}: PrecipitationImageProps): ReactElement => {
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
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={`Precipitation ${chance}%`}
    />
  );
};

export default PrecipitationImage;
