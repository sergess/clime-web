import React, { ReactElement } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header } from 'client/design-system/organisms';
import {
  LAYOUT_HORIZONTAL_PADDING,
  MAIN_CONTENT_VERTICAL_PADDING,
} from 'client/constants';

export const Layout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Header />
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
