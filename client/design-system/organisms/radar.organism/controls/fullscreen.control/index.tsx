import React, { FC, ReactElement } from 'react';
import { ComponentDefaultProps, Box, IconButton } from '@chakra-ui/react';
import { useMap } from 'react-leaflet';
import Image from 'next/image';

export const Fullscreen: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const map = useMap();

  return (
    <Box {...componentStyles}>
      <IconButton
        variant="radar-control"
        onClick={() => map.zoomOut()}
        aria-label="Fullscreen"
        icon={
          <Image
            src="/icons/fullscreen-on.svg"
            width={24}
            height={24}
            alt="Fullscreen"
          />
        }
      />
    </Box>
  );
};

export default Fullscreen;
