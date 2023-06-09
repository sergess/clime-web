import React, { ReactElement, FC } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer, Header, Breadcrumbs } from 'client/design-system/organisms';

export const HomePageLayout: FC = ({
  children,
  breadcrumbs,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Header />
      <Box as="main" w="full" h="100%" bg="white">
        {children}
      </Box>
    </Box>

    <Breadcrumbs items={breadcrumbs} />

    <Footer />
  </>
);

export default HomePageLayout;
