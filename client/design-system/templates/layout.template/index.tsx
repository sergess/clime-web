import React, { ReactElement } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header } from 'client/design-system/organisms';

export const Layout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Header />
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
