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
import { SwiperSlide } from 'swiper/react';

import { HurricaneTrackerPageLayout } from 'client/design-system/templates';
import { Carousel } from 'client/design-system/molecules';
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

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThan(
    climeTheme.breakpoints.md
  );

  return (
    <>
      <Head>
        <title>
          {t('Track Hurricanes on your Phone with Clime Radar App | Clime')}
        </title>
        <meta
          name="description"
          content={t(
            'Stay storm-safe this season! Monitor the current position and projected path of hurricanes on the map, set timely alerts and get an extended 2-week forecast'
          )}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex
        mb={{ base: '73px', xl: '132px' }}
        w={{ base: '132px', xl: '180px' }}
        h={{ base: '30px', xl: '41px' }}
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
        maxW={{ base: 'container.md', xl: '100%' }}
        mx="auto"
        align={{ base: 'center', xl: 'initial' }}
        flexDirection={{ base: 'column', xl: 'row' }}
        position="relative"
        sx={{
          '@media screen and (max-width: 1180px)': {
            pb: '120px',
          },
          '@media screen and (max-width: 619px)': {
            pb: '220px',
          },
        }}
      >
        <Box w="100%" textAlign={{ base: 'center', xl: 'left' }}>
          <Heading
            as="h1"
            lineHeight={{ base: '44px', xl: '72px' }}
            fontSize={{ base: '42px', xl: '72px' }}
            fontWeight={{ base: '800', xl: '800' }}
            fontFamily="manrope"
            color="red.100"
          >
            Hurricane tracker <Text color="blue.200">on your phone</Text>
          </Heading>
          <Text
            textStyle={{
              base: '16-manrope-400',
              lg: '20-content-normal',
            }}
            color="gray.600"
            pt="1.25rem"
            fontFamily="manrope"
          >
            Stay storm-safe this season with the Clime app! Track, forecast, and
            set alerts for hurricanes.
          </Text>
          <Flex
            my={{ base: '1.5rem', lg: '2.5rem' }}
            justifyContent={{ base: 'center', xl: 'flex-start' }}
          >
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
          <Flex
            justify={{ base: 'center', xl: 'flex-start' }}
            pb={{ base: '34px', xl: '0' }}
          >
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
          <Flex
            bottom="0"
            position={{ base: 'absolute', xl: 'static' }}
            w="full"
            justify={{ base: 'center', xl: 'flex-start' }}
            flexWrap="wrap"
            gap="12"
            mt={{ base: '0', xl: '3.5rem' }}
          >
            <Flex
              p={{ base: '0.75rem 0', xl: '0.75rem' }}
              flexDirection={{ base: 'column', xl: 'row' }}
              justify={{ base: 'center', xl: 'flex-start' }}
              align={{ base: 'center', xl: 'center' }}
              w="full"
              maxW={{ base: '150px', xl: '249px' }}
            >
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/tracker-ico.svg" layout="fill" alt="" />
              </Box>
              <Text
                ps={{ base: '0', xl: '1.25rem' }}
                pt={{ base: '1.25rem', xl: '0' }}
                textStyle={{
                  base: '16-manrope-600',
                  xl: '20-manrope-600',
                }}
              >
                Hurricane tracker
              </Text>
            </Flex>
            <Flex
              p={{ base: '0.75rem 0', xl: '0.75rem' }}
              flexDirection={{ base: 'column', xl: 'row' }}
              justify={{ base: 'center', xl: 'flex-start' }}
              align="center"
              w="full"
              maxW={{ base: '150px', xl: '249px' }}
            >
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/alerts-ico.svg" layout="fill" alt="" />
              </Box>
              <Text
                ps={{ base: '0', xl: '1.25rem' }}
                pt={{ base: '1.25rem', xl: '0' }}
                textStyle={{
                  base: '16-manrope-600',
                  xl: '20-manrope-600',
                }}
              >
                Alerts
              </Text>
            </Flex>
            <Flex
              p={{ base: '0.75rem 0', xl: '0.75rem' }}
              flexDirection={{ base: 'column', xl: 'row' }}
              justify={{ base: 'center', xl: 'flex-start' }}
              align="center"
              w="full"
              maxW={{ base: '150px', xl: '249px' }}
            >
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/sharing-ico.svg" layout="fill" alt="" />
              </Box>
              <Text
                ps={{ base: '0', xl: '1.25rem' }}
                pt={{ base: '1.25rem', xl: '0' }}
                textStyle={{
                  base: '16-manrope-600',
                  xl: '20-manrope-600',
                }}
              >
                Weather sharing
              </Text>
            </Flex>
            <Flex
              p={{ base: '0.75rem 0', xl: '0.75rem' }}
              flexDirection={{ base: 'column', xl: 'row' }}
              justify={{ base: 'center', xl: 'flex-start' }}
              align="center"
              w="full"
              maxW={{ base: '150px', xl: '249px' }}
            >
              <Box w="36px" h="36px" flex="none" position="relative">
                <Image src="/icons/calendar-ico.svg" layout="fill" alt="" />
              </Box>
              <Text
                ps={{ base: '0', xl: '1.25rem' }}
                pt={{ base: '1.25rem', xl: '0' }}
                textStyle={{
                  base: '16-manrope-600',
                  xl: '20-manrope-600',
                }}
              >
                14-day forecast
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Flex
          flex="none"
          maxW={{ base: '350px', xl: '100%' }}
          justify={{ base: 'center', xl: 'flex-start' }}
          ms={{ base: '0', xl: '1.25rem' }}
          pos="relative"
        >
          <AnimatedElement
            node={
              <Image
                src="/img-index-b1-1.png"
                width={580}
                height={570}
                alt="Clime radar"
                quality={70}
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
                quality={70}
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
      <Box
        maxW={{ base: 'container.md', lg: '962px' }}
        w="full"
        mx="auto"
        pt={{ base: '50px', lg: '100px' }}
      >
        <Heading
          as="h2"
          lineHeight={{ base: '36px', xl: '44px' }}
          fontSize={{ base: '32px', xl: '54px' }}
          fontWeight={{ base: '700', xl: '700' }}
          color="blue.800"
          fontFamily="manrope"
          textAlign="center"
        >
          Precise weather, precisely for you
        </Heading>
        <Flex
          pos="relative"
          flexWrap="wrap"
          mx={{ base: 'auto', lg: '0' }}
          mt={{ base: '2.5rem', lg: '3rem' }}
          mb={{ base: '2.5rem', lg: '5rem' }}
          justify={{ base: 'center', lg: 'flex-start' }}
          sx={{
            gap: '50px',
            '@media screen and (max-width: 1090px)': {
              gap: '40px',
            },
            '& .swiper': {
              paddingBottom: '60px',
            },
            '& .swiper-slide': {
              maxWidth: '456px',
              '@media screen and (max-width: 1090px)': {
                maxWidth: '316px',
              },
            },
          }}
          maxW={{ base: '316px', md: 'full' }}
        >
          <IconButton
            className="carousel-left-control"
            aria-label="left"
            variant="home-carousel-button"
            pos="absolute"
            zIndex="2"
            top="171px"
            left={{ base: '-10px', md: '0' }}
            display={{ base: 'inline-flex', md: 'none' }}
            icon={
              <Flex transform="rotate(180deg)">
                <Image
                  src="/icons/carousel-arrow.png"
                  width={20}
                  height={20}
                  alt="Left"
                />
              </Flex>
            }
          />
          <IconButton
            className="carousel-right-control"
            aria-label="right"
            variant="home-carousel-button"
            pos="absolute"
            zIndex="2"
            top="171px"
            right={{ base: '-10px', md: '0' }}
            display={{ base: 'inline-flex', md: 'none' }}
            icon={
              <Flex>
                <Image
                  src="/icons/carousel-arrow.png"
                  width={20}
                  height={20}
                  alt="Left"
                />
              </Flex>
            }
          />
          <Carousel
            navigation={{
              prevEl: '.carousel-left-control',
              nextEl: '.carousel-right-control',
            }}
            slidesPerView={screenWidthSmallerThanMedium ? 1 : 4}
            slidesPerGroup={screenWidthSmallerThanMedium ? 1 : 4}
            onActiveIndexChange={() => {}}
            spaceBetween={0}
            carousel={!!screenWidthSmallerThanMedium}
          >
            <SwiperSlide>
              <Flex
                maxW={{ base: '316px', lg: '456px' }}
                w="full"
                align="center"
                flexDirection="column"
              >
                <Box
                  pt="39px"
                  maxW="400px"
                  w="full"
                  ms={{ base: '0', lg: '3.5rem' }}
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
                        src="/precise-weather-screen-n.png"
                        width={216}
                        height={292}
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
                    display={{ base: 'none', lg: 'block' }}
                  >
                    <Image src="/icons/tracker-ico.svg" layout="fill" alt="" />
                  </Box>
                  <Box>
                    <Text textStyle="20-manrope-800" color="gray.600">
                      Hurricane tracker
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-600',
                        lg: '18-manrope-600',
                      }}
                      color="#4763B6"
                      pt="0.5rem"
                    >
                      Track hurricane position and projected path
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-400',
                        lg: '18-manrope-400',
                      }}
                      color="gray.600"
                    >
                      Stay aware and prepare for the upcoming severe weather
                      events. Watch the areas of detected precipitation on the
                      map and where they are moving.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                maxW={{ base: '316px', lg: '456px' }}
                w="full"
                align="center"
                flexDirection="column"
              >
                <Box
                  pt="39px"
                  maxW="400px"
                  w="full"
                  ms={{ base: '0', lg: '3.5rem' }}
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
                    display={{ base: 'none', lg: 'block' }}
                  >
                    <Image src="/icons/alerts-ico.svg" layout="fill" alt="" />
                  </Box>
                  <Box>
                    <Text textStyle="20-manrope-800" color="gray.600">
                      Alerts
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-600',
                        lg: '18-manrope-600',
                      }}
                      color="#4763B6"
                      pt="0.5rem"
                    >
                      Turn on hurricane tracker alerts
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-400',
                        lg: '18-manrope-400',
                      }}
                      color="gray.600"
                    >
                      Keep an eye on extreme weather changes in your area with
                      push notifications. Get timely alerts and important
                      updates.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                maxW={{ base: '316px', lg: '456px' }}
                w="full"
                align="center"
                flexDirection="column"
              >
                <Box
                  pt="39px"
                  maxW="400px"
                  w="full"
                  ms={{ base: '0', lg: '3.5rem' }}
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
                    display={{ base: 'none', lg: 'block' }}
                  >
                    <Image src="/icons/sharing-ico.svg" layout="fill" alt="" />
                  </Box>
                  <Box>
                    <Text textStyle="20-manrope-800" color="gray.600">
                      Weather sharing
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-600',
                        lg: '18-manrope-600',
                      }}
                      color="#4763B6"
                      pt="0.5rem"
                    >
                      Warn your loved ones about severe weather
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-400',
                        lg: '18-manrope-400',
                      }}
                      color="gray.600"
                    >
                      Use the weather sharing feature to give your family and
                      friends potentially life-saving info about severe weather.
                      Pass on details about current weather conditions via
                      social media or private messages.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                maxW={{ base: '316px', lg: '456px' }}
                w="full"
                align="center"
                flexDirection="column"
              >
                <Box
                  pt="39px"
                  maxW="400px"
                  w="full"
                  ms={{ base: '0', lg: '3.5rem' }}
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
                    display={{ base: 'none', lg: 'block' }}
                  >
                    <Image src="/icons/calendar-ico.svg" layout="fill" alt="" />
                  </Box>
                  <Box>
                    <Text textStyle="20-manrope-800" color="gray.600">
                      14-day forecast
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-600',
                        lg: '18-manrope-600',
                      }}
                      color="#4763B6"
                      pt="0.5rem"
                    >
                      Get a two-week extended weather forecast
                    </Text>
                    <Text
                      textStyle={{
                        base: '16-manrope-mob-400',
                        lg: '18-manrope-400',
                      }}
                      color="gray.600"
                    >
                      In addition to getting valuable information on hurricanes,
                      you can also access a detailed 14-day hourly weather
                      forecast. Plan ahead for your travels and outdoor
                      activities by checking temperature, precipitation, UV
                      index and more!
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
          </Carousel>
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
