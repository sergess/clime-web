import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer } from 'client/design-system/organisms';

export const GetApplicationPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Flex
        as="main"
        w="full"
        h="100%"
        bg={{
          base: "#0F1527 url('/bg-app-page-mob.jpg')",
          md: "#0F1527 url('/bg-app-page.jpg')",
        }}
        bgPosition={{ base: 'center top', md: 'center top' }}
        bgSize={{ base: 'cover', md: '2560px 1440px' }}
        bgRepeat="no-repeat"
        justify="center"
        overflow="hidden"
        px={{ base: '2.5', lg: '0' }}
        pb={{ base: '0', lg: '16' }}
      >
        <Flex
          maxW="container.xl"
          w="full"
          pt={{ base: '6', md: '60', lg: '36' }}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex w="full" flexDirection="column" pe={{ base: '0', lg: '10' }}>
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
              height={650}
              alt="Precise weather"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
    <Footer />
  </>
);

export default GetApplicationPageLayout;
