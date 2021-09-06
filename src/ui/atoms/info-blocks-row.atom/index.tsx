import { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';

import { InfoBlocksRowProps } from './types';

export const InfoBlocksRow = ({
  children,
}: InfoBlocksRowProps): ReactElement => (
  <Flex w="full" direction="row" my={3}>
    {children}
  </Flex>
);

export default InfoBlocksRow;
