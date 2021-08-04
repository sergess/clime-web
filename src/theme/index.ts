import { ThemeOverride, extendTheme } from '@chakra-ui/react';

import styles from './global-styles.theme';
import foundations from './foundations';
import components from './components';

const climeTheme: ThemeOverride = {
  styles,
  components,
  ...foundations,
};

export default extendTheme(climeTheme);
