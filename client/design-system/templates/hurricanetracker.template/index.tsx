import React, { ReactElement } from 'react';
import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer } from 'client/design-system/organisms';

export const HurricaneTrackerPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Flex
        as="main"
        w="full"
        h="100%"
        bg={{
          base: "#f4f8fb url('/bg-hurricane.jpg')",
          md: "#f4f8fb url('/bg-hurricane.jpg')",
        }}
        bgPosition={{ base: 'center top', md: 'center top' }}
        bgSize={{ base: 'cover', md: '2560px 1628px' }}
        bgRepeat={{ base: 'no-repeat', md: 'no-repeat' }}
        justify="center"
        overflow="hidden"
        px={{ base: '2.5', md: '0' }}
        pb={{ base: '6', md: '20' }}
      >
        <Flex
          maxW="1268px"
          w="full"
          pt={{ base: '10', md: '31px' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex w="full" flexDirection="column">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
    <Footer />
  </>
);

export default HurricaneTrackerPageLayout;
