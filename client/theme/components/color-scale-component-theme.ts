const ColorScale = {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 'sm',
    textStyle: { base: '8-bold', md: '10-semi-bold' },
    color: 'white',
    d: 'flex',
  },
  variants: {
    'rain-legend': {
      bg: 'linear-gradient(270deg, #7C007C 0%, #7C007C 4.66%, #EB008C 17.22%, #E80000 29.74%, #FF8C28 42.67%, #FFEB00 53.38%, #FFEB00 59.19%, #00803B 72.99%, #007535 78.68%, #008737 85.76%, #00C855 94.77%, #00E182 100%)',
    },
    'mixed-legend': {
      bg: 'linear-gradient(270deg, #820861 0%, #9B1473 11.68%, #A0287D 20.43%, #B9418C 29.45%, #C85A9B 43.14%, #DC82B4 61.94%, #F0AACD 82.6%, #FFC8DE 100%)',
    },
    'snow-legend': {
      bg: 'linear-gradient(270deg, #050055 0%, #0F2373 16.51%, #1E5A96 37.21%, #37A0CD 62.14%, #37CDE6 82.93%, #3CF0FA 100%, #3CF0FA 100%)',
    },
  },
};

export default ColorScale;
