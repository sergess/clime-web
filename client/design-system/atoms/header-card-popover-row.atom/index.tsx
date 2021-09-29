import React, { ReactElement } from 'react';

import { Divider, Box } from '@chakra-ui/react';

import { HeaderCardPopoverRowProps } from './types';

export const HeaderCardPopoverRow = ({
  first = false,
  children,
  ...rest
}: HeaderCardPopoverRowProps): ReactElement => (
  <Box {...rest}>
    {!first && <Divider orientation="horizontal" variant="card-divider" />}

    {children}
  </Box>
);

export default HeaderCardPopoverRow;
