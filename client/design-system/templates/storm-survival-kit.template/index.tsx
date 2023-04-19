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
          base: "#0F1527 url('/bg-storm-desk.jpg')",
          md: "#0F1527 url('/bg-storm-desk.jpg')",
        }}
        bgPosition={{ base: 'center top', md: 'center top' }}
        bgSize={{ base: 'cover', md: '2560px 2184px' }}
        bgRepeat="no-repeat"
        justify="center"
        overflow="hidden"
        px={{ base: '2.5', lg: '0' }}
        pb="16"
      >
        <Flex
          maxW="container.xl"
          w="full"
          pt={{ base: '6', lg: '60px' }}
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
