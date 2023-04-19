import React, { ReactElement } from 'react';
import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer } from 'client/design-system/organisms';

export const StormSurvivalKitPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Flex
        as="main"
        w="full"
        h="100%"
        bg={{
          base: "#0F1527 url('/bg-storm-mob.jpg')",
          lg: "#0F1527 url('/bg-storm-desk.jpg')",
        }}
        bgPosition={{ base: 'center top', lg: 'center top' }}
        bgSize={{ base: 'cover', lg: '2560px 2184px' }}
        bgRepeat="no-repeat"
        justify="center"
        overflow="hidden"
        px={{ base: '2.5', lg: '0' }}
        pb={{ base: '6', lg: '20' }}
      >
        <Flex
          maxW="container.xl"
          w="full"
          pt={{ base: '10', lg: '60px' }}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex w="full" flexDirection="column" pe={{ base: '0', lg: '10' }}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
    <Footer />
  </>
);

export default StormSurvivalKitPageLayout;
