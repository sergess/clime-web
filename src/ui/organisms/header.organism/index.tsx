import React, { ReactElement } from 'react';
import { Box, Container, ComponentDefaultProps } from '@chakra-ui/react';
import { ClimeLogoDarkIcon, ClimeLogoWhiteIcon } from 'src/ui/atoms';

export const Header = ({
  variant,
  ...rest
}: ComponentDefaultProps): ReactElement => (
  <Box
    as="header"
    top="0px"
    bg="white"
    w="full"
    boxShadow="header"
    py={['4', '4', '5']}
    px={['4', '4', '2.5']}
    flex="0 0 auto"
  >
    <Container
      maxW="container.xl"
      p="0"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flex="none">
        <ClimeLogoWhiteIcon
          w={{ base: '90.53px', md: '108px' }}
          h={{ base: '20px', md: '24px' }}
          d="block"
        />
      </Box>
      <Box w="full" d="flex" justifyContent="flex-end">
        Components
      </Box>
    </Container>
  </Box>
);

export default Header;
