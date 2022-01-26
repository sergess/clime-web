const styles = {
  global: {
    'html, body': {
      color: 'blue.800',
      h: '100%',
    },
    '#__next': {
      d: 'flex',
      flexDirection: 'column',
      h: '100%',
    },
    // [TODO it will be removed after fix of oneTrust]
    '#onetrust-consent-sdk svg': {
      d: 'inline',
    },
  },
};

export default styles;
