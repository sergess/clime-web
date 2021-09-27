import { ReactNode } from 'react';
import { PopoverProps } from '@chakra-ui/react';

export type HeaderCardPopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
  popoverProps?: PopoverProps;
};

export default HeaderCardPopoverProps;
