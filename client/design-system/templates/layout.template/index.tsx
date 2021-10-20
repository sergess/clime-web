import React, { ReactElement } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header } from 'client/design-system/organisms';
import { TopNavigationBar } from 'client/design-system/molecules';
import {
  LAYOUT_HORIZONTAL_PADDING,
  MAIN_CONTENT_VERTICAL_PADDING,
} from 'client/constants';

export const Layout = ({ children }: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Header />
      <TopNavigationBar />
      <Box
        as="main"
        h="100%"
        bg="gray.50"
        px={LAYOUT_HORIZONTAL_PADDING}
        py={MAIN_CONTENT_VERTICAL_PADDING}
      >
        {children}
      </Box>
    </Box>
    <Footer />
  </>
);

export default Layout;
