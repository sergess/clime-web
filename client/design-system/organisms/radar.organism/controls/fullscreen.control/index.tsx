import React, { FC, ReactElement, useCallback } from 'react';
import { useAtom } from 'jotai';
import { ComponentDefaultProps, Box, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

import { mapFullscreenOnAtom } from 'client/state/atoms';
import { trackEvent } from 'client/services';
import {
  FULLSCREEN_MODE_EXIT,
  FULLSCREEN_MODE_ENTERED,
} from 'client/services/analytics.service/constants';

export const Fullscreen: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const [mapFullscreenOn, setMapFullscreenOn] = useAtom(mapFullscreenOnAtom);

  const onMapFullscreen = useCallback(() => {
    setMapFullscreenOn((on) => !on);
    if (mapFullscreenOn) {
      trackEvent(FULLSCREEN_MODE_EXIT);
    } else {
      trackEvent(FULLSCREEN_MODE_ENTERED);
    }
  }, [mapFullscreenOn]);

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
