import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';

import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'client/constants';
import { useOverflowCondition } from './hooks';

import { HeaderPopoverOverlayProps } from './types';

export const HeaderPopoverOverlay = ({
  onClick,
}: HeaderPopoverOverlayProps): ReactElement => {
  useOverflowCondition();
  return (
    <Box
      onClick={onClick}
      zIndex={10}
      position="fixed"
      width="100vw"
      opacity="0.8"
      right={0}
      left={0}
      bottom={0}
      top={{
        base: `${MOBILE_HEADER_HEIGHT}px`,
        md: `${DESKTOP_HEADER_HEIGHT}px`,
      }}
      backgroundColor="#0F1527"
    />
  );
};

export default HeaderPopoverOverlay;
