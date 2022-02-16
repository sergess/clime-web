import React, { FC, ReactElement } from 'react';
import { useAtomValue } from 'jotai/utils';
import { ComponentDefaultProps, Box, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

import { mapAtom } from 'client/design-system/organisms/radar.organism/state/atoms';

export const Fullscreen: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const map = useAtomValue(mapAtom);

  return (
    <Box {...componentStyles}>
      <IconButton
        variant="radar-control"
        onClick={() => map?.zoomOut()}
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
