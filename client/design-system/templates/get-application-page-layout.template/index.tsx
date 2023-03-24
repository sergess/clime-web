import React, { ReactElement } from 'react';
import Image from 'next/image';
import { useTranslation, Trans } from 'next-i18next';
import { Box, Flex, ComponentDefaultProps, Text } from '@chakra-ui/react';

import { Footer } from 'client/design-system/organisms';
import { BackgroundImage } from 'client/design-system/atoms';

export const GetApplicationPageLayout: React.FC = ({
  children,
}: ComponentDefaultProps): ReactElement => {
  const { t } = useTranslation(['clime-app']);

  return (
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
          pb="16"
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
              display={{ base: 'none', lg: 'block' }}
              flex="none"
              me={{ base: '-10%', lg: '0px' }}
              mt={{ base: '4', lg: '0' }}
            >
              <Flex
                pos="relative"
                w="480px"
                h="620px"
                alignItem="center"
                justifyContent="center"
              >
                <BackgroundImage src="/img-relink-phone.png" priority />
                <Flex
                  flexDirection="column"
                  position="relative"
                  justifyContent="center"
                  align="center"
                  zIndex={10}
                >
                  <Flex
                    flex="none"
                    p={2.5}
                    borderRadius="12px"
                    border="2px solid rgba(45, 232, 134, 0.2)"
                    maxW="auto"
                  >
                    <Image
                      src="/icons/qr-code.svg"
                      width={160}
                      height={160}
                      priority
                      alt="QR"
                    />
                  </Flex>
                  <Box textAlign="center" pt={5}>
                    <Trans i18nKey="scanTheQRCode" t={t}>
                      <Text
                        color="#2DE886"
                        fontSize="24px"
                        lineHeight="28px"
                        fontWeight="600"
                      >
                        Scan the QR code
                      </Text>
                      <Text
                        color="white"
                        fontSize="18px"
                        lineHeight="24px"
                        fontWeight="500"
                        pt={1}
                      >
                        with your device to download
                        <br /> the Clime mobile app.
                      </Text>
                    </Trans>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default GetApplicationPageLayout;
