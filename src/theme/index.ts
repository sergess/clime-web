import { ThemeOverride, extendTheme } from '@chakra-ui/react';

import config from './config';
import styles from './global-styles.theme';
import foundations from './foundations';
import components from './components';

const climeTheme: ThemeOverride = {
  config,
  styles,
  components,
  ...foundations,
};

export default extendTheme(climeTheme);
