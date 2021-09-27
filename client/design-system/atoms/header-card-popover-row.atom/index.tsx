import React, { ReactElement } from 'react';

import { Divider, Box } from '@chakra-ui/react';

import { HeaderCardPopoverRowProps } from './types';

export const HeaderCardPopoverRow = ({
  first = false,
  children,
}: HeaderCardPopoverRowProps): ReactElement => (
  <Box
    _hover={{
      bg: 'gray.50',
    }}
  >
    {!first && <Divider orientation="horizontal" variant="card-divider" />}

    {children}
  </Box>
);

export default HeaderCardPopoverRow;
