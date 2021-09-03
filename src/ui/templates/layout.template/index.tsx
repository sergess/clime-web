import React, { ReactElement } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer } from 'src/ui/organisms';

export const Layout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <header>logo</header>
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
