import { ReactElement } from 'react';
import Image, { ImageProps } from 'next/image';

import { DEFAULT_BLUR_DATA_URL } from 'client/constants/blur-data-urls.constant';

export const BackgroundImage = (props: ImageProps): ReactElement => (
  <Image
    alt="Background image"
    blurDataURL={DEFAULT_BLUR_DATA_URL}
    placeholder="blur"
    layout="fill"
    objectFit="cover"
    {...props}
  />
);

export default BackgroundImage;
