import { ReactElement } from 'react';
import { Flex, ComponentDefaultProps } from '@chakra-ui/react';

export const InfoBlocksRow = ({
  children,
  ...componentStyles
}: ComponentDefaultProps): ReactElement => (
  <Flex {...componentStyles} w="full" direction="row">
    {children}
  </Flex>
);

export default InfoBlocksRow;
