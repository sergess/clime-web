import { ThemeComponentProps } from '@chakra-ui/react';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const Popover = {
  variants: {
    card: ({ matchWidth }: ThemeComponentProps) => ({
      popper: {
        ...(!matchWidth && {
          px: LAYOUT_HORIZONTAL_PADDING,
          width: '100%',
          maxWidth: '100%',
        }),
        minWidth: 'auto !important',
      },
      content: {
        overflow: 'hidden',
        bg: 'white',
        boxShadow: 'card',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '2xl',
        border: 'none',
        width: '100%',
      },
    }),
  },
};

export default Popover;
