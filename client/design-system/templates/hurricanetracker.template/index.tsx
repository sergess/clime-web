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
          base: "#F7F8FA url('/bg-hurricane-mob.png')",
          sm: "#f8f9fd url('/bg-hurricane-table.jpg')",
          xl: "#f4f8fb url('/bg-hurricane.jpg')",
        }}
        bgPosition={{ base: 'center top', sm: 'center top', xl: 'center top' }}
        bgSize={{ base: 'contain', sm: 'cover', xl: '2560px 1628px' }}
        bgRepeat={{ base: 'no-repeat', sm: 'no-repeat', xl: 'no-repeat' }}
        justify="center"
        overflow="hidden"
        px={{ base: '4', xl: '4' }}
        pb={{ base: '14', xl: '20' }}
      >
        <Flex
          maxW="1268px"
          w="full"
          pt={{ base: '8', xl: '31px' }}
          justify="space-between"
          align={{ base: 'center', xl: 'flex-start' }}
          flexDirection={{ base: 'column', xl: 'row' }}
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
