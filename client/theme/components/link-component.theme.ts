const Link = {
  variants: {
    'common-nav': {
      color: 'blue.500',
      boxShadow: '0 2px 4px rgba(26,96,179,0.05)',

      _hover: {
        bgGradient: 'linear(180deg, #FFFFFF 0%, #F5F9FF 100%)',
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
    'alert-nav': {
      color: 'red.50',

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
    'app-nav': {
      color: 'orange.50',

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
    download: {
      bg: '#2DE886',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textStyle: '20-monserat-800',
      textDecoration: 'none',
      borderRadius: '12px',
      letterSpacing: '0.4px',

      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

export default Link;
