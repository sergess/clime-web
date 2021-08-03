import { ThemeOverride, extendTheme } from '@chakra-ui/react';

import styles from './global-styles.theme';

import textStyles from './foundations/text-styles-foundation.theme';
import shadows from './foundations/shadows-foundation.theme';
import colors from './foundations/colors-foundation.theme';

import Button from './components/button-component.theme';

const climeTheme: ThemeOverride = {
  styles,
  colors,
  shadows,
  textStyles,
  components: { Button },
};

export default extendTheme(climeTheme);
