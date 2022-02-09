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
      bg: 'linear-gradient(180deg, #518FE8 0%, #1C72EB 100%)',
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

      _disabled: {
        opacity: 0,
        cursor: 'default',
      },
    },
    'search-cancel': {
      h: 'min',
      minW: 'min',
      bg: 'none',
      borderRadius: 'none',
      p: '0',
      color: 'blue.500',
      textStyle: '16-medium',

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
    'marketing-banner-button': {
      h: '38px',
      w: '140px',
      bgGradient: 'linear(to-b, #FFD139 -0.18%, #FFC404 99.82%)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      borderRadius: 'md',
      p: '0',
      color: 'black',
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '0.875rem',
      textTransform: 'uppercase',

      _hover: {
        bgGradient: 'linear(to-b, #FFEA31 -0.18%, #FF9B04 99.82%)',
        _disabled: {
          bgGradient: 'linear(to-b, #FFEA31 -0.18%, #FF9B04 99.82%)',
        },
      },

      _active: {
        bg: '#FAC310',
        color: '#FB7F04',
      },
    },
    'radar-control': {
      boxShadow: 'radar-control',
      borderRadius: 12,
      bg: 'white',
    },
  },
};

export default Button;
