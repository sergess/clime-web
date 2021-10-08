const Button = {
  variants: {
    'current-page-link': {
      borderRadius: '3xl',
      height: '2.375rem',
      textStyle: '16-bold',
      px: '1.25rem',
      bg: 'blue.500',
      boxShadow: 'page-link-box',
      color: 'white',
      textShadow: 'page-link-text',
    },
    'page-link': {
      borderRadius: '3xl',
      height: '2.375rem',
      px: '1.25rem',
      bg: 'white',
      color: 'blue.50',
      textStyle: '16-semi-bold',

      _hover: {
        boxShadow: 'hover-page-link-box',
        color: 'blue.500',
      },
    },
    'clime-app-link': {
      borderRadius: '3xl',
      height: '2.375rem',
      textStyle: '16-bold',
      px: '1.25rem',
      bg: 'white',
      color: 'orange.400',

      _hover: {
        boxShadow: 'hover-clime-app-link-box',
      },
    },
    'expand-card': {
      bg: 'white',
      borderTopStartRadius: '0',
      borderTopEndRadius: '0',
      borderBottomStartRadius: '2xl',
      borderBottomEndRadius: '2xl',
      color: 'blue.500',
      width: 'full',
      height: '3rem',
      textStyle: '14-semi-bold',
    },
    cta: {
      bg: 'blue.500',
      borderRadius: 'xl',
      color: 'white',
      height: '3rem',
      textStyle: '14-semi-bold',
      px: '1.875rem',

      _hover: {
        bgGradient: 'linear(to-b, #54C1FF, blue.500)',

        _disabled: {
          bg: 'gray.50',
        },
      },

      _active: {
        bg: 'blue.500',
        color: 'blue.50',
      },

      _disabled: {
        bg: 'gray.50',
        color: 'blue.50',
        opacity: 1,
      },
    },
    'legend-detailed': {
      bg: 'white',
      borderRadius: 'none',
      boxSize: '5',
      minW: 'min',
      px: '0',

      _hover: {
        _disabled: {
          bg: 'white',
        },
      },

      _active: {
        bg: 'white',
      },

      _disabled: {
        bg: 'white',
        opacity: 1,
      },
    },
    'player-button': {
      h: '6',
      minW: 'min',
      bg: 'none',
      borderRadius: 'none',
      p: '0',

      _hover: {
        _disabled: {
          bg: 'none',
        },
      },

      _active: {
        bg: 'none',
      },

      _disabled: {
        bg: 'none',
        opacity: 1,
      },
    },
    'carousel-control': {
      bg: 'white',
      minW: 'min',
      h: 'auto',
      borderRadius: '0',
      px: '0',

      _hover: {
        bg: 'white',
      },

      _active: {
        bg: 'white',
      },
    },
    'common-nav-link': {
      bg: 'white',
      d: 'flex',
      whiteSpace: 'nowrap',
      alignItems: 'center',
      borderRadius: '3xl',
      color: 'blue.50',
      textStyle: '16-semi-bold',
      h: '38px',
      px: '5',
      ms: { base: '2', md: '3' },

      _first: {
        ms: { base: '2.5', md: '4' },
      },

      _hover: {
        textDecoration: 'none',
        color: 'blue.500',
      },

      _activeLink: {
        bg: 'blue.500',
        color: 'white',
      },

      _active: {
        bg: 'blue.500',
        color: 'white',
      },
    },
    'alert-nav-link': {
      bg: 'white',
      d: 'flex',
      whiteSpace: 'nowrap',
      alignItems: 'center',
      borderRadius: '2xl',
      color: 'red.50',
      textStyle: '16-semi-bold',
      h: '38px',
      px: '5',
      ms: { base: '2', md: '3' },

      _first: {
        ms: { base: '2.5', md: '4' },
      },

      _hover: {
        textDecoration: 'none',
        color: 'red.400',
      },

      _activeLink: {
        bg: 'red.400',
        color: 'white',
      },

      _active: {
        bg: 'red.400',
        color: 'white',
      },
    },
    'app-nav-link': {
      bg: 'white',
      d: 'flex',
      whiteSpace: 'nowrap',
      alignItems: 'center',
      borderRadius: '2xl',
      color: 'orange.50',
      textStyle: '16-semi-bold',
      h: '38px',
      px: '5',
      ms: { base: '2', md: '3' },

      _first: {
        ms: { base: '2.5', md: '4' },
      },

      _hover: {
        textDecoration: 'none',
        color: 'orange.400',
      },

      _activeLink: {
        bg: 'white',
        color: 'orange.400',
      },

      _active: {
        bg: 'white',
        color: 'orange.400',
      },
    },
  },
};

export default Button;
