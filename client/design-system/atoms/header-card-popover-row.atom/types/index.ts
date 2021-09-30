import { ReactNode } from 'react';
import { BoxProps } from '@chakra-ui/react';

export type HeaderCardPopoverRowProps = {
  first?: boolean;
  children: ReactNode;
} & BoxProps;

export default HeaderCardPopoverRowProps;
