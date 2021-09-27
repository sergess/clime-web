import React, { ReactElement } from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  Box,
} from '@chakra-ui/react';

import { useScreenWidthSmallerThanMedium } from 'client/hooks';
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'client/constants';

import { HeaderCardPopoverProps } from './types';

export const HeaderCardPopover = ({
  trigger,
  content,
  popoverProps,
}: HeaderCardPopoverProps): ReactElement => {
  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  return (
    <Popover
      isOpen
      placement="bottom"
      gutter={screenWidthSmallerThanMedium ? 26 : 36}
      variant="card"
      {...popoverProps}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>

      <Portal>
        <Box
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

        <PopoverContent>{content}</PopoverContent>
      </Portal>
    </Popover>
  );
};

export default HeaderCardPopover;
