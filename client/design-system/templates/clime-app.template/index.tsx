import React, { ReactElement } from 'react';
import { Box, Flex, ComponentDefaultProps } from '@chakra-ui/react';

import { Footer } from 'client/design-system/organisms';
import Image from 'next/image';

export const ClimeAppPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => (
  <>
    <Box flex="1 0 auto">
      <Flex
        as="main"
        w="full"
        h="100%"
        bg="url('/bg-clime-app.png') #0F1527"
        bgPosition="center top"
        bgRepeat="no-repeat"
        bgSize="2560px 1440px"
        justify="center"
        overflow="hidden"
        px={{ base: '0', lg: '2.5' }}
      >
        <Box
          maxW="container.xl"
          w="full"
          pt={{ base: '55px', lg: '70px' }}
          pb={{ base: '51px', lg: '28px' }}
          position="relative"
          _after={{
            base: {
              content: '" "',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'url("/overlay-mob.png") 0 0 no-repeat',
              backgroundSize: 'contain',
            },
            lg: {
              content: '" "',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '1259px!important',
              height: '254px!important',
              background: 'url("/overlay.png") 0 0 no-repeat!important',
              backgroundSize: 'cover!important',
              transform: 'translateX(-50%)',
            },
          }}
        >
          <Box
            mb={{ base: '14', lg: '12' }}
            mx="auto"
            width={{ base: '141px', lg: '164px' }}
            height={{ base: '32px', lg: '40px' }}
            position="relative"
          >
            <Image
              src="/icons/clime-logo-white.svg"
              layout="fill"
              priority
              alt="Clime"
            />
          </Box>
          <Flex
            justify="space-between"
            align={{ base: 'center', lg: 'flex-start' }}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Flex
              w="full"
              px={{ base: '2.5', lg: '0' }}
              flexDirection="column"
              alignItems={{ base: 'center', lg: 'flex-start' }}
              position="relative"
              zIndex="10"
            >
              {children}
            </Flex>
            <Box
              flex="none"
              me={{ base: '-10%', lg: '0px' }}
              mt={{ base: '4', lg: '0' }}
              display={{ base: 'none', lg: 'block' }}
              position="relative"
            >
              <Image src="/pic-clime-app.png" width={590} height={565} alt="" />
              <Box position="absolute" top="330px" right="58px" zIndex="3">
                <Image src="/frame.png" width={160} height={27} alt="" />
              </Box>
              <Box
                position="absolute"
                top="183px"
                right="56px"
                borderRadius="6px"
                overflow="hidden"
                fontSize={0}
                sx={{
                  clipPath: 'polygon(27px 0, 100% 0, 100% 100%, 0 145%)',
                }}
              >
                <Image
                  src="/сlime-hurricanecard.gif"
                  width={171}
                  height={169}
                  alt=""
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
    <Footer />
  </>
);

export default ClimeAppPageLayout;
