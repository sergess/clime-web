import React, { FC, ReactElement, useCallback } from 'react';
import { useUpdateAtom, useAtomValue } from 'jotai/utils';
import { ComponentDefaultProps, Box, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

import { mapFullscreenMode } from 'client/state/atoms';

export const Fullscreen: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const setMapFullscreenMode = useUpdateAtom(mapFullscreenMode);

  const onMapFullscreen = useCallback(() => {
    setMapFullscreenMode((value) => !value);
  }, []);

  const mapFullscreen = useAtomValue(mapFullscreenMode);

  return (
    <Box {...componentStyles}>
      <IconButton
        variant="radar-control"
        onClick={onMapFullscreen}
        aria-label="Fullscreen"
        icon={
          <Image
            src={`/icons/fullscreen-${mapFullscreen ? 'off' : 'on'}.svg`}
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
