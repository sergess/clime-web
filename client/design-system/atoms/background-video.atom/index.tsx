import React, { ReactElement, FC } from 'react';
import { ComponentDefaultProps } from '@chakra-ui/react';

export const BackgroundVideo: FC<{
  poster: string;
  source: {
    src: string;
    type: string;
  };
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  containerStyles?: ComponentDefaultProps;
}> = ({
  poster,
  source,
  containerStyles,
  autoPlay = true,
  controls = false,
  loop = true,
  playsInline = true,
  preload = 'auto',
}): ReactElement => (
  <video
    muted
    poster={poster}
    style={containerStyles}
    autoPlay={autoPlay}
    controls={controls}
    loop={loop}
    playsInline={playsInline}
    preload={preload}
  >
    <source src={source.src} type={source.type} />
  </video>
);

export default BackgroundVideo;
