import React, {
  ReactElement,
  useEffect,
  useRef,
  MutableRefObject,
  useState,
} from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import climeTheme from 'client/theme';
import { SwiperSlide } from 'swiper/react';

import { HomePageLayout } from 'client/design-system/templates';
import { Carousel, TopNavigationBar } from 'client/design-system/molecules';
import {
  AnimatedElement,
  BackgroundVideo,
  ScreenPhone,
} from 'client/design-system/atoms';
import {
  firstHomeImage,
  secondHomeImage,
  sliderHomeImages,
} from 'client/design-system/atoms/animated-element.atom/keyframes';
import {
  useHasMounted,
  useCookies,
  useLocationFromBrowser,
  useLocationDataByCoordinates,
  useRedirectToAppPopupOpened,
  useElementOnView,
  useScreenWidthSmallerThan,
} from 'client/hooks';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';
import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';
import { ForecastCard } from 'common/types';

import {
  mapDailyCard,
  mapHourlyCard,
  mapSummaryCard,
  mapTodayCard,
  withForecastCards,
  withLocationData,
  withTranslations,
  withBreadcrumbs,
} from 'server/middlewares/get-server-side-props';
import { RemoteConfig } from 'server/services/remote-config.service';

const Download = dynamic(
  () => import('client/design-system/molecules/download.molecule'),
  {
    ssr: false,
  }
);

const Index = (): ReactElement => {
  const { cookies, setCookie } = useCookies([
    EXACT_LATITUDE_COOKIE,
    EXACT_LONGITUDE_COOKIE,
  ]);
  const [latitudeCookie, longitudeCookie] = cookies as (string | undefined)[];
  const redirectToAppPopupOpened = useRedirectToAppPopupOpened();

  const locationFromBrowser = useLocationFromBrowser({
    skip: (!!latitudeCookie && !!longitudeCookie) || redirectToAppPopupOpened,
  });
  const { data: exactLocationData } =
    useLocationDataByCoordinates(locationFromBrowser);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (
      !redirectToAppPopupOpened &&
      hasMounted &&
      exactLocationData &&
      !latitudeCookie &&
      !longitudeCookie
    ) {
      setCookie(EXACT_LATITUDE_COOKIE, `${locationFromBrowser?.latitude}`);
      setCookie(EXACT_LONGITUDE_COOKIE, `${locationFromBrowser?.longitude}`);
    }
  }, [
    hasMounted,
    exactLocationData,
    locationFromBrowser,
    latitudeCookie,
    longitudeCookie,
    redirectToAppPopupOpened,
  ]);
  const { t } = useTranslation('meta-tags');

  const [slide, setSlide] = useState(0);

  const onSlide = (index: number) => setSlide(index);

  const screenWidthSmallerThanLarge = useScreenWidthSmallerThan(
    climeTheme.breakpoints.lg
  );

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThan(
    climeTheme.breakpoints.md
  );

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const isVisible = useElementOnView(ref);

  const refForecastBox = useRef() as MutableRefObject<HTMLDivElement>;
  const isVisibleForecastBox = useElementOnView(refForecastBox);

  return (
    <>
      <Head>
        <title>{t('Local & World Weather Forecast | Clime')}</title>
        <meta
          name="description"
          content={t(
            'Prepare for weather surprises with Clime! Check the local forecast for today, view the current weather in multiple locations, and get precise 10-day forecasts.'
          )}
        />
      </Head>
      <Flex
        as="section"
        w="full"
        boxSize="content-box"
        align="center"
        direction="column"
        bg={{
          base: "url('/bg-index-b1-mob.jpg')",
          sm: "url('/bg-index-b1-tablet.jpg')",
          lg: "url('/bg-index-b1-desk.jpg')",
        }}
        bgPosition={{
          base: 'center bottom',
          sm: 'center bottom',
          lg: 'center bottom',
        }}
        bgRepeat={{ base: 'no-repeat', sm: 'no-repeat', lg: 'no-repeat' }}
        bgSize={{ base: 'cover', sm: 'cover', lg: 'cover' }}
      >
        <Box maxW="container.xl" w="full" p="0">
          <Box
            w="full"
            py={5}
            px={LAYOUT_HORIZONTAL_PADDING}
            bg={{
              base: 'linear-gradient(0deg, rgba(239, 243, 248, 0) 0%, #EFF3F8 27.6%)',
              md: 'none',
            }}
          >
            <TopNavigationBar p="3px" m="-3px" />
          </Box>
        </Box>
        <Box maxW="container.xl" w="full" p="0" px={LAYOUT_HORIZONTAL_PADDING}>
          <Flex
            maxW={{ base: 'container.md', lg: '100%' }}
            mx="auto"
            align={{ base: 'center', lg: 'initial' }}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box
              w="100%"
              py={{ base: '1.25rem', sm: '2.5rem', lg: '4rem' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Heading
                as="h1"
                lineHeight={{ base: '36px', sm: '62px' }}
                fontSize={{ base: '32px', sm: '52px' }}
                color="blue.800"
              >
                Precise weather <Text color="blue.500">Precisely for you</Text>
              </Heading>
              <Text
                textStyle={{
                  base: '16-weather-detail',
                  sm: '24-content-medium',
                }}
                color="gray.600"
                py={{ base: '1.25rem', sm: '2.5rem', lg: '3.5rem' }}
              >
                Use the weather sharing feature to warn your family and friends
                about severe weather and message them about current weather
                conditions on social media or via private messages.
              </Text>
              <Flex justify={{ base: 'center', lg: 'flex-start' }}>
                <Download />
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
        </Box>
      </Flex>
      <Flex
        as="section"
        w="full"
        px={LAYOUT_HORIZONTAL_PADDING}
        boxSize="content-box"
        align="center"
        direction="column"
        bg={{
          base: "url('/bg-index-b2-4-mob.jpg')",
          sm: "url('/bg-index-b2-4-tablet.jpg')",
          lg: "url('/bg-index-b2-4-desk.jpg')",
        }}
        bgPosition={{
          base: 'center bottom',
          sm: 'center bottom',
          lg: 'center bottom',
        }}
        bgRepeat={{ base: 'no-repeat', sm: 'no-repeat', lg: 'no-repeat' }}
        bgSize={{ base: 'cover', sm: 'cover', lg: 'cover' }}
      >
        <Box
          maxW="container.xl"
          w="full"
          pt={{ base: '12', sm: '16', lg: '33' }}
          ref={ref}
        >
          <Heading
            as="h2"
            textAlign="center"
            lineHeight={{ base: '28px', sm: '40px' }}
            fontSize={{ base: '24px', sm: '32px' }}
            color="blue.800"
          >
            <Text color="red.400" as="span">
              Know the chances
            </Text>{' '}
            of severe weather
          </Heading>
          <Text
            pt={4}
            textAlign="center"
            textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
            color="gray.600"
          >
            Stay aware and prepare for upcoming severe weather events
          </Text>
          <Flex
            mx="auto"
            maxW={{ base: '334', md: '670' }}
            mt={{ base: '8', sm: '10' }}
            pos="relative"
            css={{
              '& .swiper': {
                paddingBottom: '40px',
              },
            }}
          >
            <IconButton
              className="carousel-left-control"
              aria-label="left"
              variant="home-carousel-button"
              pos="absolute"
              zIndex="2"
              top="calc(50% - 40px)"
              left={{ base: '-10px', md: '0' }}
              d={{ base: 'inline-flex', md: 'none' }}
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
              top="calc(50% - 40px)"
              right={{ base: '-10px', md: '0' }}
              d={{ base: 'inline-flex', md: 'none' }}
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
            <Box
              d={{
                base: isVisible && !slide ? 'block' : 'none',
                md: isVisible ? 'block' : 'none',
              }}
              pos="absolute"
              zIndex="2"
              bottom={{ base: '80px', lg: 'auto' }}
              top={{ base: 'auto', lg: '24' }}
              transform={{
                base: 'translateX(2%)',
                md: 'translateX(2%)',
                lg: 'translateX(-71%)',
              }}
              w={{ base: '320px', lg: '340px' }}
              bg="linear-gradient(180deg, rgba(185, 34, 24, 0.9) 0%, rgba(77, 36, 84, 0.9) 100%)"
              boxShadow="red-card"
              borderRadius="2xl"
              p={{ base: '4', lg: '5' }}
            >
              <Flex align="center">
                <Flex
                  align="center"
                  w={12}
                  h={12}
                  justify="center"
                  flex="none"
                  me={4}
                  bg="rgba(255, 255, 255, 0.2)"
                  borderRadius="lg"
                >
                  <Image
                    src="/icons/ic-hurricane-card.png"
                    width={32}
                    height={32}
                    alt="Hurricane tracker"
                  />
                </Flex>
                <Text
                  w="100%"
                  color="white"
                  textStyle={{ base: '16-bold-card', lg: '20-bold' }}
                >
                  Enable a Hurricane tracker with alerts
                </Text>
              </Flex>
              <Text
                my={5}
                color="white"
                textStyle={{ base: '14-medium-card', lg: '16-medium-card' }}
                d="block"
                ps={{ base: '3', lg: '4' }}
                pos="relative"
                _after={{
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.4)',
                }}
              >
                Monitor the current position and projected path of hurricanes on
                the map
              </Text>
              <Text
                color="white"
                textStyle={{ base: '14-medium-card', lg: '16-medium-card' }}
                d="block"
                ps={{ base: '3', lg: '4' }}
                pos="relative"
                _after={{
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.4)',
                }}
              >
                Stay updated and aware of the storm’s strength with timely
                alerts
              </Text>
            </Box>
            <Box
              d={{
                base: isVisible && slide ? 'block' : 'none',
                md: isVisible ? 'block' : 'none',
              }}
              pos="absolute"
              zIndex="2"
              bottom={{ base: '80px', lg: 'auto' }}
              top={{ base: 'auto', lg: '44' }}
              right={0}
              transform={{
                base: 'translateX(-2%)',
                md: 'translateX(1%)',
                lg: 'translateX(71%)',
              }}
              w={{ base: '320px', lg: '340px' }}
              bg="linear-gradient(180deg, rgba(32, 57, 140, 0.9) 0%, rgba(57, 16, 145, 0.9) 100%)"
              boxShadow="blue-card"
              borderRadius="2xl"
              p={{ base: '4', lg: '5' }}
            >
              <Flex align="center">
                <Flex
                  align="center"
                  w={12}
                  h={12}
                  justify="center"
                  flex="none"
                  me={4}
                  bg="rgba(255, 255, 255, 0.2)"
                  borderRadius="lg"
                >
                  <Image
                    src="/icons/ic-wildfire-card.png"
                    width={32}
                    height={32}
                    alt="Hurricane tracker"
                  />
                </Flex>
                <Text
                  w="100%"
                  color="white"
                  textStyle={{ base: '16-bold-card', lg: '20-bold' }}
                >
                  Explore the wildfire map and a lightning tracker
                </Text>
              </Flex>
              <Text
                my={5}
                color="white"
                textStyle={{ base: '14-medium-card', lg: '16-medium-card' }}
                d="block"
                ps={{ base: '3', lg: '4' }}
                pos="relative"
                _after={{
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.4)',
                }}
              >
                Check active US wildfires on the map, with fire behavior and
                fire causes
              </Text>
              <Text
                color="white"
                textStyle={{ base: '14-medium-card', lg: '16-medium-card' }}
                d="block"
                ps={{ base: '3', lg: '4' }}
                pos="relative"
                _after={{
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.4)',
                }}
              >
                See where and when lightning’s been detected without stepping
                outside
              </Text>
            </Box>
            <Carousel
              navigation={{
                prevEl: '.carousel-left-control',
                nextEl: '.carousel-right-control',
              }}
              slidesPerView={screenWidthSmallerThanMedium ? 1 : 2}
              slidesPerGroup={screenWidthSmallerThanMedium ? 1 : 2}
              onActiveIndexChange={(index) => onSlide(index)}
              spaceBetween={screenWidthSmallerThanMedium ? 0 : 20}
            >
              <SwiperSlide>
                <Box w={334} pos="relative" p={5}>
                  <ScreenPhone
                    screen={
                      <BackgroundVideo
                        containerStyles={{ objectFit: 'cover', height: '100%' }}
                        poster="/video-poster-index-b2-1.png"
                        source="/video-index-b2-1.mp4"
                      />
                    }
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w={334} p={5}>
                  <ScreenPhone
                    screen={
                      <Image
                        src="/img-index-b2-2.jpg"
                        layout="fill"
                        alt=""
                        quality={85}
                      />
                    }
                  />
                </Box>
              </SwiperSlide>
            </Carousel>
          </Flex>
        </Box>
        <Flex
          justifyContent="space-between"
          align="center"
          pt={{ base: '16', lg: '28' }}
          pb={{ base: '16', lg: '36' }}
          maxW={{ base: 'container.md', lg: 'container.xl' }}
          mx="auto"
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
        >
          <Flex mt={{ base: '10', lg: '0' }} maxW={580} w="100%" align="center">
            <BackgroundVideo
              poster="/video-poster-index-b3.png"
              source="/video-index-b3.mp4"
            />
          </Flex>
          <Flex maxW={580} w="100%" align="center" flexDirection="column">
            <Heading
              as="h2"
              textAlign="center"
              lineHeight={{ base: '28px', sm: '40px' }}
              fontSize={{ base: '24px', sm: '32px' }}
              color="blue.800"
            >
              Anticipate upcoming weather conditions{' '}
              <Text color="purple.400" as="span">
                wherever you are
              </Text>
            </Heading>
            <Text
              pt={4}
              textAlign="center"
              textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
              color="gray.600"
            >
              Don’t guess the weather!
              <br /> Rely on Clime for yearl-round weather forecasts for your
              location and across the world.
            </Text>
          </Flex>
        </Flex>
        <Box
          maxW="container.xl"
          w="full"
          pt={{ base: '3.5', sm: '5', lg: '0' }}
          pb={{ base: '16', lg: '36' }}
        >
          <Text
            textAlign="center"
            textStyle={{ base: '24-content-semi-bold', sm: '32-home-heading' }}
            color="blue.500"
          >
            Don’t be surprised by rainy days.
          </Text>
          <Heading
            as="h2"
            textAlign="center"
            lineHeight={{ base: '28px', sm: '40px' }}
            fontSize={{ base: '24px', sm: '32px' }}
            color="blue.800"
          >
            Reliable rain forecast and real-time rain radar.
          </Heading>
          <Flex
            ref={refForecastBox}
            mx="auto"
            mt={{ base: '5', md: '10' }}
            pos="relative"
            maxW={{ base: '330px', lg: 'full' }}
            css={{
              '& .swiper': {
                paddingBottom: '40px',
              },
            }}
          >
            <IconButton
              className="carousel2-left-control"
              aria-label="left"
              variant="home-carousel-button"
              pos="absolute"
              zIndex="2"
              top="calc(50% - 40px)"
              d={{ base: 'inline-flex', lg: 'none' }}
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
              className="carousel2-right-control"
              aria-label="right"
              variant="home-carousel-button"
              pos="absolute"
              zIndex="2"
              top="calc(50% - 40px)"
              right={0}
              d={{ base: 'inline-flex', lg: 'none' }}
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
                prevEl: '.carousel2-left-control',
                nextEl: '.carousel2-right-control',
              }}
              slidesPerView={screenWidthSmallerThanLarge ? 1 : 3}
              slidesPerGroup={screenWidthSmallerThanLarge ? 1 : 3}
              onActiveIndexChange={() => {}}
            >
              <SwiperSlide>
                <Flex
                  align="center"
                  flexDirection="column"
                  maxW="380px"
                  transition={{ lg: 'opacity 1s linear' }}
                  opacity={{ lg: `${isVisibleForecastBox ? 1 : 0.2}` }}
                >
                  <Heading
                    as="h3"
                    textAlign="center"
                    lineHeight={{ base: '24px', lg: '28px' }}
                    fontSize={{ base: '20px', lg: '24px' }}
                    color="blue.500"
                  >
                    Real-time radar map
                  </Heading>
                  <Text
                    textAlign="center"
                    color="gray.600"
                    pt={3}
                    pb={5}
                    textStyle={{
                      base: '16-medium-card',
                      lg: '18-content-medium',
                    }}
                  >
                    Watch the areas of detected precipitation and where they are
                    moving
                  </Text>
                  <ScreenPhone
                    w={294}
                    screen={
                      <BackgroundVideo
                        containerStyles={{ objectFit: 'cover', height: '100%' }}
                        poster="/video-poster-index-b4-1.png"
                        source="/video-index-b4-1.mp4"
                      />
                    }
                  />
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  align="center"
                  flexDirection="column"
                  maxW="380px"
                  transition={{ lg: 'opacity 1s linear 2s' }}
                  opacity={{ lg: `${isVisibleForecastBox ? 1 : 0.2}` }}
                >
                  <Heading
                    as="h3"
                    textAlign="center"
                    lineHeight={{ base: '24px', lg: '28px' }}
                    fontSize={{ base: '20px', lg: '24px' }}
                    color="blue.500"
                  >
                    Precipitation forecast map
                  </Heading>
                  <Text
                    textAlign="center"
                    color="gray.600"
                    pt={3}
                    pb={5}
                    textStyle={{
                      base: '16-medium-card',
                      lg: '18-content-medium',
                    }}
                  >
                    View an advanced rain and snow forecast for the next 24
                    hours
                  </Text>
                  <ScreenPhone
                    w={294}
                    screen={
                      <Image
                        src="/img-index-b4-2a.jpg"
                        layout="fill"
                        alt=""
                        quality={85}
                      />
                    }
                  />
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  align="center"
                  flexDirection="column"
                  maxW="380px"
                  transition={{ lg: 'opacity 1s linear 4s' }}
                  opacity={{ lg: `${isVisibleForecastBox ? 1 : 0.2}` }}
                >
                  <Heading
                    as="h3"
                    textAlign="center"
                    lineHeight={{ base: '24px', lg: '28px' }}
                    fontSize={{ base: '20px', lg: '24px' }}
                    color="blue.500"
                  >
                    RainScope
                  </Heading>
                  <Text
                    textAlign="center"
                    color="gray.600"
                    pt={3}
                    pb={5}
                    textStyle={{
                      base: '16-medium-card',
                      lg: '18-content-medium',
                    }}
                  >
                    See a minute-by-minute precipitation outlook
                  </Text>
                  <ScreenPhone
                    w={294}
                    screen={
                      <Image
                        src="/img-index-b4-3a.jpg"
                        layout="fill"
                        alt=""
                        quality={85}
                      />
                    }
                  />
                </Flex>
              </SwiperSlide>
            </Carousel>
          </Flex>
        </Box>
      </Flex>
      <Flex
        as="section"
        w="full"
        px={LAYOUT_HORIZONTAL_PADDING}
        boxSize="content-box"
        align="center"
        direction="column"
        bg={{
          base: "url('/bg-index-b5-7-mob.jpg')",
          sm: "url('/bg-index-b5-7-tablet.jpg')",
          lg: "url('/bg-index-b5-7-desk.jpg')",
        }}
        bgPosition={{ base: 'center top', sm: 'center top', lg: 'center top' }}
        bgRepeat={{ base: 'no-repeat', sm: 'no-repeat', lg: 'no-repeat' }}
        bgSize={{ base: 'cover', sm: 'cover', lg: 'cover' }}
      >
        <Flex
          w="full"
          justifyContent="space-between"
          align="center"
          maxW={{ base: 'container.md', lg: 'container.xl' }}
          mx="auto"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex maxW={580} w="100%" align="center" flexDirection="column">
            <Heading
              as="h2"
              textAlign="center"
              lineHeight={{ base: '28px', sm: '40px' }}
              fontSize={{ base: '24px', sm: '32px' }}
              color="blue.800"
            >
              Enjoy the local weather forecast{' '}
              <Text color="purple.400">in your pocket</Text>
            </Heading>
            <Box
              maxW={540}
              pt={10}
              textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
              color="gray.600"
              css={{
                '& div div': {
                  width: '40px',
                  height: '40px',
                  background: "url('/icons-index-b5.png') 0 0 no-repeat",
                  backgroundSize: 'cover',
                  flex: 'none',
                  margin: '0 20px 0 0',
                },
              }}
            >
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box />
                <Text>
                  Plan wisely with an accurate 14-day hourly weather forecast
                </Text>
              </Flex>
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 20%!important' }} />
                <Text>Check the current temperature in your location</Text>
              </Flex>
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 40%!important' }} />
                <Text>
                  View the current Air Quality Index (AQI) before going out
                </Text>
              </Flex>
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 60%!important' }} />
                <Text>
                  Know the UV index for today, tomorrow, and coming days
                </Text>
              </Flex>
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 80%!important' }} />
                <Text>
                  Explore the animated wind forecast for 2 weeks in advance
                </Text>
              </Flex>
              <Flex
                align="center"
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 100%!important' }} />
                <Text>
                  Monitor the current position and projected path of hurricanes
                  on the map
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            pt={{ base: '5', sm: '10', lg: '0' }}
            maxW={{ base: '294', sm: '580' }}
            w="100%"
            justify="center"
          >
            <ScreenPhone
              screen={
                <Image
                  src="/img-index-b5.jpg"
                  layout="fill"
                  alt=""
                  quality={85}
                />
              }
            />
          </Flex>
        </Flex>
        <Flex
          w="full"
          pt={{ base: '20', lg: '40' }}
          justifyContent="space-between"
          align="center"
          maxW={{ base: 'container.md', lg: 'container.xl' }}
          mx="auto"
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
        >
          <Flex
            pt={{ base: '10', lg: '0' }}
            maxW={{ base: '294', sm: '580' }}
            w="100%"
            justify="center"
          >
            <ScreenPhone
              screen={
                <BackgroundVideo
                  poster="/video-poster-index-b6.jpg"
                  source="/video-index-b6.mp4"
                />
              }
            />
          </Flex>
          <Flex maxW={580} w="100%" align="center" flexDirection="column">
            <Box
              pb={4}
              w={{ base: '60px', sm: '80px' }}
              h={{ base: '60px', sm: '80px' }}
              pos="relative"
            >
              <Image src="/ic-bell-b6.png" layout="fill" quality={85} />
            </Box>
            <Text
              textAlign="center"
              textStyle={{
                base: '24-content-semi-bold',
                sm: '32-home-heading',
              }}
              color="gray.800"
            >
              Don’t throw caution to the wind.
            </Text>
            <Heading
              as="h2"
              textAlign="center"
              lineHeight={{ base: '28px', sm: '40px' }}
              fontSize={{ base: '24px', sm: '32px' }}
              color="orange.400"
            >
              Get inclement weather alerts!
            </Heading>
            <Text
              pt={4}
              textAlign="center"
              textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
              color="gray.600"
            >
              Set up timely notifications on your phone to anticipate weather
              changes like:
            </Text>
            <Box
              maxW={540}
              pt={10}
              textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
              color="gray.600"
              css={{
                '& div div': {
                  width: '40px',
                  height: '40px',
                  background: "url('/icons-index-b6.png') 0 0 no-repeat",
                  backgroundSize: 'cover',
                  flex: 'none',
                  margin: '0 20px 0 0',
                },
              }}
            >
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box />
                <Text>Severe weather alerts</Text>
              </Flex>
              <Flex
                align="center"
                mb={3}
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 50%!important' }} />
                <Text>Updates of major weather changes</Text>
              </Flex>
              <Flex
                align="center"
                borderRadius="xl"
                bg="white"
                p={{ base: '4', sm: '5' }}
                boxShadow="list"
              >
                <Box sx={{ backgroundPosition: '0 100%!important' }} />
                <Text>Daily morning and evening weather outlooks</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex
          w="full"
          pt={{ base: '20', lg: '40' }}
          pb={24}
          justifyContent="space-between"
          align="center"
          maxW={{ base: 'container.md', lg: 'container.xl' }}
          mx="auto"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex maxW={580} w="100%" align="center" flexDirection="column">
            <Heading
              as="h2"
              textAlign="center"
              lineHeight={{ base: '28px', sm: '40px' }}
              fontSize={{ base: '24px', sm: '32px' }}
              color="blue.800"
            >
              <Text color="red.400">Warn your loved ones</Text> about severe
              weather
            </Heading>
            <Text
              pt={4}
              textAlign="center"
              textStyle={{ base: '16-weather-detail', sm: '20-content-medium' }}
              color="gray.600"
            >
              Use the weather sharing feature to warn your family and friends
              about severe weather and message them about current weather
              conditions on social media or in chats.
            </Text>
          </Flex>
          <Flex
            mt={{ base: '10', lg: '0' }}
            maxW={580}
            w="100%"
            justify="center"
            pos="relative"
          >
            <AnimatedElement
              node={
                <Image
                  src="/img_index_b7-1.png"
                  width={580}
                  height={600}
                  alt="Clime radar"
                  quality={85}
                />
              }
              animation={`20s linear infinite ${sliderHomeImages}`}
              opacity={0}
            />
            <AnimatedElement
              node={
                <Image
                  src="/img_index_b7-2.png"
                  width={580}
                  height={600}
                  alt="Clime radar"
                  quality={85}
                />
              }
              animation={`20s linear 5s infinite ${sliderHomeImages}`}
              pos="absolute"
              opacity={0}
              top={0}
              left={0}
            />
            <AnimatedElement
              node={
                <Image
                  src="/img_index_b7-3.png"
                  width={580}
                  height={600}
                  alt="Clime radar"
                  quality={85}
                />
              }
              animation={`20s linear 10s infinite ${sliderHomeImages}`}
              pos="absolute"
              opacity={0}
              top={0}
              left={0}
            />
            <AnimatedElement
              node={
                <Image
                  src="/img_index_b7-4.png"
                  width={580}
                  height={600}
                  alt="Clime radar"
                  quality={85}
                />
              }
              animation={`20s linear 15s infinite ${sliderHomeImages}`}
              pos="absolute"
              opacity={0}
              top={0}
              left={0}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

Index.displayName = 'Index';

Index.Layout = HomePageLayout;

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remoteConfig = new RemoteConfig();
  const [locationData, translations, appConfig] = await Promise.all([
    withLocationData({ autolocation: true })(context),
    withTranslations(
      'today-card',
      'hourly-forecast-card',
      'summary-card',
      'daily-forecast-card',
      'banners',
      'meta-tags'
    )(context),
    remoteConfig.getAppConfig(),
  ]);

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  const forecastCards = await withForecastCards(
    {
      [ForecastCard.TODAY]: mapTodayCard,
      [ForecastCard.HOURLY]: mapHourlyCard,
      [ForecastCard.SUMMARY]: mapSummaryCard,
      [ForecastCard.DAILY]: mapDailyCard,
    },
    locationData
  )(context);

  if (!forecastCards) {
    return {
      notFound: true,
    };
  }

  const breadcrumbs = await withBreadcrumbs(context, locationData);

  return {
    props: {
      locationData,
      forecastCards,
      appConfig,
      breadcrumbs,
      ...translations,
    },
  };
};
