import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

export const AppPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Flex
        as="main"
        w="full"
        h="100%"
        bg="#0F1527 url('/bg-app-page.jpg')"
        bgPosition="center top"
        bgRepeat="no-repeat"
        bgSize="2560px 1440px"
        justify="center"
        overflow="hidden"
        px={{ base: '2.5', lg: '0' }}
      >
        <Flex
          maxW="container.xl"
          w="full"
          pt={{ base: '48', lg: '36' }}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex w="full" flexDirection="column">
            {children}
          </Flex>
          <Box
            flex="none"
            me={{ base: '-10%', lg: '0px' }}
            mt={{ base: '4', lg: '0' }}
          >
            <Image
              src="/app-page-available-devices.png"
              width={556}
              priority
              height={650}
              alt="Precise weather"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  </>
);

export default AppPageLayout;
