import {
  LAYOUT_HORIZONTAL_PADDING,
  MOBILE_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from 'client/constants';

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
        // [todo] move zIndex to constants ABOVE_THE_MAP, MAP, SETTINGS, еtс
        zIndex: 1300,
        px: [...LAYOUT_HORIZONTAL_PADDING, 0],
        width: '100%',
        maxWidth: '100%',
        minWidth: 'auto !important',
        overflowY: 'auto',
        maxH: {
          base: `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)`,
          md: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
        },
      },
      content: cardContentStyles,
    },
    card: {
      popper: {
        // [todo] move zIndex to constants ABOVE_THE_MAP, MAP, SETTINGS, еtс
        zIndex: 1300,
        px: [...LAYOUT_HORIZONTAL_PADDING, 0],
        width: { base: '100%', md: 'max-content' },
      },
      content: cardContentStyles,
    },
  },
};

export default Popover;
