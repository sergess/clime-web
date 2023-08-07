import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { Box, Flex, Text, Heading, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Head from 'next/head';
import climeTheme from 'client/theme';

import { HurricaneTrackerPageLayout } from 'client/design-system/templates';
import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';
import { AnimatedElement } from 'client/design-system/atoms';
import {
  firstHomeImage,
  secondHomeImage,
} from 'client/design-system/atoms/animated-element.atom/keyframes';
import { useScreenWidthSmallerThan } from 'client/hooks';
import { redirectToAppPopupOpened as appPopupOpened } from 'client/design-system/molecules/marketing-popup.organism/state/derivatives';

const Download = dynamic(
  () => import('client/design-system/molecules/download.molecule'),
  {
    ssr: false,
  }
);

const HurricaneTrackerPage = (): ReactElement => {
  const { t } = useTranslation(['meta-tags']);

  const screenWidthSmallerThanLarge = useScreenWidthSmallerThan(
    climeTheme.breakpoints.lg
  );

  const [, setPopupOpened] = useAtom(appPopupOpened);

  return (
    <>
      <Head>
        <title>
          {t('Survival kit & storm prep for emergency weather | Clime')}
        </title>
        <meta
          name="description"
          content={t(
            'Ensure your storm survival kit is complete with these essential items. Then download Clime for hyper-local weather alerts and severe weather tracking.'
          )}
        />
      </Head>
      <Flex
        mb={{ base: '73px', md: '132px' }}
        w={{ base: '132px', md: '180px' }}
        h={{ base: '30px', md: '41px' }}
        position="relative"
      >
        <Image
          src="/icons/clime-logo-white.svg"
          layout="fill"
          priority
          alt="Clime"
        />
      </Flex>
      <Flex
        maxW={{ base: 'container.md', lg: '100%' }}
        mx="auto"
        align={{ base: 'center', lg: 'initial' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box w="100%" textAlign={{ base: 'center', lg: 'left' }}>
          <Heading
            as="h1"
            lineHeight={{ base: '44px', sm: '72px' }}
            fontSize={{ base: '42px', sm: '72px' }}
            fontWeight={{ base: '800', sm: '800' }}
            color="red.100"
          >
            Hurricane tracker <Text color="blue.200">on your phone</Text>
          </Heading>
          <Text
            textStyle={{
              base: '16-content-normal',
              sm: '20-content-normal',
            }}
            color="gray.600"
            pt="1.25rem"
          >
            Stay storm-safe this season with the Clime app! Track, forecast, and
            set alerts for hurricanes.
          </Text>
          <Flex my="2.5rem">
            <Image src="/icons/stars.svg" width={145} height={27} alt="" />
            <Text
              lineHeight="24px"
              fontSize="17px"
              color="blue.200"
              ps="1.25rem"
            >
              1M ratings
            </Text>
          </Flex>
          <Flex justify={{ base: 'center', lg: 'flex-start' }}>
            <Download />
            {!screenWidthSmallerThanLarge && (
              <IconButton
                onClick={() => setPopupOpened(true)}
                ms={5}
                aria-label="QR Code"
                icon={
                  <Image
                    src="/icons/qr-button.png"
                    width={125}
                    height={40}
                    alt=""
                  />
                }
              />
            )}
          </Flex>
          <Flex flexWrap="wrap" gap="12" mt="3.5rem">
            <Flex p="0.75rem" align="center" w="full" maxW="249px">
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/tracker-ico.svg" layout="fill" alt="" />
              </Box>
              <Text ps="1.25rem">Hurricane tracker</Text>
            </Flex>
            <Flex p="0.75rem" align="center" w="full" maxW="249px">
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/alerts-ico.svg" layout="fill" alt="" />
              </Box>
              <Text ps="1.25rem">Alerts</Text>
            </Flex>
            <Flex p="0.75rem" align="center" w="full" maxW="249px">
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/sharing-ico.svg" layout="fill" alt="" />
              </Box>
              <Text ps="1.25rem">Weather sharing</Text>
            </Flex>
            <Flex p="0.75rem" align="center" w="full" maxW="249px">
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/calendar-ico.svg" layout="fill" alt="" />
              </Box>
              <Text ps="1.25rem">14-day forecast</Text>
            </Flex>
          </Flex>
        </Box>
        <Flex
          flex="none"
          maxW={{ base: '580px', lg: 'auto' }}
          justify={{ base: 'center', lg: 'flex-start' }}
          ms={{ base: '0', lg: '1.25rem' }}
          pos="relative"
        >
          <AnimatedElement
            node={
              <Image
                src="/img-index-b1-1.png"
                width={580}
                height={570}
                alt="Clime radar"
                quality={85}
                priority
              />
            }
            animation={`${firstHomeImage} infinite 5s linear`}
            pos="relative"
            zIndex={2}
          />
          <AnimatedElement
            node={
              <Image
                src="/img-index-b1-2.png"
                width={580}
                height={570}
                alt="Clime radar"
                quality={85}
                priority
              />
            }
            animation={`${secondHomeImage} infinite 5s linear`}
            pos="absolute"
            top={0}
            left={0}
          />
        </Flex>
      </Flex>
      <Box maxW={{ base: 'container.md', lg: '962px' }} mx="auto" pt="100px">
        <Heading
          as="h2"
          lineHeight={{ base: '36px', sm: '44px' }}
          fontSize={{ base: '32px', sm: '54px' }}
          fontWeight={{ base: '700', sm: '700' }}
          color="blue.800"
        >
          Precise weather, precisely for you
        </Heading>
        <Flex flexWrap="wrap" mt="3rem" mb="5rem" css={{ gap: '50px' }}>
          <Flex maxW="456px" w="full" align="center" flexDirection="column">
            <Box
              pt="39px"
              maxW="400px"
              w="full"
              ms="3.5rem"
              borderRadius="24px"
              overflow="hidden"
              bg="#FBFCFF"
            >
              <Box
                position="relative"
                width="244px"
                letterSpacing={0}
                wordSpacing={0}
                fontSize={0}
                borderRadius="48px"
                mx="auto"
                boxShadow="precise-box"
              >
                <Image
                  src="/device-box.png"
                  width={244}
                  height={304}
                  alt=""
                  quality={85}
                />
                <Box
                  position="absolute"
                  top="0.625rem"
                  left="14px"
                  letterSpacing={0}
                  wordSpacing={0}
                  fontSize={0}
                >
                  <Image
                    src="/precise-weather-screen.png"
                    width={216}
                    height={304}
                    alt=""
                    quality={85}
                  />
                </Box>
              </Box>
            </Box>
            <Flex pt="1rem">
              <Box
                w="36px"
                h="36px"
                flex="none"
                position="relative"
                me="1.25rem"
              >
                <Image src="/icons/tracker-ico.svg" layout="fill" alt="" />
              </Box>
              <Box>
                <Text
                  lineHeight={{ base: '36px', sm: '34px' }}
                  fontSize={{ base: '32px', sm: '20px' }}
                  fontWeight={{ base: '700', sm: '800' }}
                  color="gray.600"
                >
                  Hurricane tracker
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '600' }}
                  color="#4763B6"
                  pt="0.5rem"
                >
                  Track hurricane position and projected path
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '400' }}
                  color="gray.600"
                >
                  Stay aware and prepare for the upcoming severe weather events.
                  Watch the areas of detected precipitation on the map and where
                  they are moving.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex maxW="456px" w="full" align="center" flexDirection="column">
            <Box
              pt="39px"
              maxW="400px"
              w="full"
              ms="3.5rem"
              borderRadius="24px"
              overflow="hidden"
              bg="#FBFCFF"
            >
              <Box
                position="relative"
                width="244px"
                letterSpacing={0}
                wordSpacing={0}
                fontSize={0}
                borderRadius="48px"
                mx="auto"
                boxShadow="precise-box"
              >
                <Image
                  src="/device-box.png"
                  width={244}
                  height={304}
                  alt=""
                  quality={85}
                />
                <Box
                  position="absolute"
                  top="0.625rem"
                  left="14px"
                  letterSpacing={0}
                  wordSpacing={0}
                  fontSize={0}
                >
                  <Image
                    src="/precise-weather-screen2.png"
                    width={216}
                    height={304}
                    alt=""
                    quality={85}
                  />
                </Box>
              </Box>
            </Box>
            <Flex pt="1rem">
              <Box
                w="36px"
                h="36px"
                flex="none"
                position="relative"
                me="1.25rem"
              >
                <Image src="/icons/alerts-ico.svg" layout="fill" alt="" />
              </Box>
              <Box>
                <Text
                  lineHeight={{ base: '36px', sm: '34px' }}
                  fontSize={{ base: '32px', sm: '20px' }}
                  fontWeight={{ base: '700', sm: '800' }}
                  color="gray.600"
                >
                  Alerts
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '600' }}
                  color="#4763B6"
                  pt="0.5rem"
                >
                  Turn on hurricane tracker alerts
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '400' }}
                  color="gray.600"
                >
                  Keep an eye on extreme weather changes in your area with push
                  notifications. Get timely alerts and important updates.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex maxW="456px" w="full" align="center" flexDirection="column">
            <Box
              pt="39px"
              maxW="400px"
              w="full"
              ms="3.5rem"
              borderRadius="24px"
              overflow="hidden"
              bg="#FBFCFF"
            >
              <Box
                position="relative"
                width="275px"
                letterSpacing={0}
                wordSpacing={0}
                fontSize={0}
                mx="auto"
              >
                <Image
                  src="/precise-weather-screen5.png"
                  width={275}
                  height={304}
                  alt=""
                  quality={85}
                />
              </Box>
            </Box>
            <Flex pt="1rem">
              <Box
                w="36px"
                h="36px"
                flex="none"
                position="relative"
                me="1.25rem"
              >
                <Image src="/icons/sharing-ico.svg" layout="fill" alt="" />
              </Box>
              <Box>
                <Text
                  lineHeight={{ base: '36px', sm: '34px' }}
                  fontSize={{ base: '32px', sm: '20px' }}
                  fontWeight={{ base: '700', sm: '800' }}
                  color="gray.600"
                >
                  Weather sharing
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '600' }}
                  color="#4763B6"
                  pt="0.5rem"
                >
                  Warn your loved ones about severe weather
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '400' }}
                  color="gray.600"
                >
                  Use the weather sharing feature to give your family and
                  friends potentially life-saving info about severe weather.
                  Pass on details about current weather conditions via social
                  media or private messages.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex maxW="456px" w="full" align="center" flexDirection="column">
            <Box
              pt="39px"
              maxW="400px"
              w="full"
              ms="3.5rem"
              borderRadius="24px"
              overflow="hidden"
              bg="#FBFCFF"
            >
              <Box
                position="relative"
                width="244px"
                letterSpacing={0}
                wordSpacing={0}
                fontSize={0}
                borderRadius="48px"
                mx="auto"
                boxShadow="precise-box"
              >
                <Image
                  src="/device-box.png"
                  width={244}
                  height={304}
                  alt=""
                  quality={85}
                />
                <Box
                  position="absolute"
                  top="0.625rem"
                  left="14px"
                  letterSpacing={0}
                  wordSpacing={0}
                  fontSize={0}
                >
                  <Image
                    src="/precise-weather-screen4.png"
                    width={216}
                    height={304}
                    alt=""
                    quality={85}
                  />
                </Box>
              </Box>
            </Box>
            <Flex pt="1rem">
              <Box
                w="36px"
                h="36px"
                flex="none"
                position="relative"
                me="1.25rem"
              >
                <Image src="/icons/calendar-ico.svg" layout="fill" alt="" />
              </Box>
              <Box>
                <Text
                  lineHeight={{ base: '36px', sm: '34px' }}
                  fontSize={{ base: '32px', sm: '20px' }}
                  fontWeight={{ base: '700', sm: '800' }}
                  color="gray.600"
                >
                  14-day forecast
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '600' }}
                  color="#4763B6"
                  pt="0.5rem"
                >
                  Get a two-week extended weather forecast
                </Text>
                <Text
                  lineHeight={{ base: '36px', sm: '28px' }}
                  fontSize={{ base: '32px', sm: '18px' }}
                  fontWeight={{ base: '700', sm: '400' }}
                  color="gray.600"
                >
                  In addition to getting valuable information on hurricanes, you
                  can also access a detailed 14-day hourly weather forecast.
                  Plan ahead for your travels and outdoor activities by checking
                  temperature, precipitation, UV index and more!
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center">
          <Download />
          {!screenWidthSmallerThanLarge && (
            <IconButton
              onClick={() => setPopupOpened(true)}
              ms={5}
              aria-label="QR Code"
              icon={
                <Image
                  src="/icons/qr-button.png"
                  width={125}
                  height={40}
                  alt=""
                />
              }
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default HurricaneTrackerPage;

HurricaneTrackerPage.Layout = HurricaneTrackerPageLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale && (await serverSideTranslations(locale, ['meta-tags']))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
