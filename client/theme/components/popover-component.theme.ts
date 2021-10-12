import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

const cardContentStyles = {
  overflow: 'hidden',
  bg: 'white',
  boxShadow: 'card',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '2xl',
  border: 'none',
};

const Popover = {
  variants: {
    'search-card': {
      popper: {
        px: [...LAYOUT_HORIZONTAL_PADDING, 0],
        width: '100%',
        maxWidth: '100%',
        minWidth: 'auto !important',
      },
      content: cardContentStyles,
    },
    card: {
      popper: {
        px: [...LAYOUT_HORIZONTAL_PADDING, 0],
        width: { base: '100%', md: 'max-content' },
      },
      content: cardContentStyles,
    },
  },
};

export default Popover;
