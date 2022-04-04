import React, { FC, ReactElement, useCallback } from 'react';
import { useAtom } from 'jotai';
import { ComponentDefaultProps, Box, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

import { mapFullscreenOnAtom } from 'client/state/atoms';

export const Fullscreen: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const [mapFullscreenOn, setMapFullscreenOn] = useAtom(mapFullscreenOnAtom);

  const onMapFullscreen = useCallback(() => {
    setMapFullscreenOn((on) => !on);
  }, []);

  return (
    <Box {...componentStyles}>
      <IconButton
        variant="radar-control"
        onClick={onMapFullscreen}
        aria-label="Fullscreen"
        icon={
          <Image
            src={`/icons/fullscreen-${mapFullscreenOn ? 'off' : 'on'}.svg`}
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
