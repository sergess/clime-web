import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import {
  Box,
  Flex,
  Text,
  Link,
  Heading,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from 'next/link';
import Head from 'next/head';

import { StormSurvivalKitPageLayout } from 'client/design-system/templates';
import { ANDROID_STORE_LINK, IOS_STORE_LINK } from 'client/constants';

import { REVALIDATE_FOR_STATIC_GENERATED_PAGES } from 'common/constants';
import climeTheme from 'client/theme';

const StormSurvivalKitPage = (): ReactElement => {
  const { t } = useTranslation(['meta-tags']);
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
        mx="auto"
        mb={{ base: '40px', md: '60px' }}
        w={{ base: '169px', md: '224px' }}
        h={{ base: '38px', md: '50px' }}
        position="relative"
      >
        <Image
          src="/icons/clime-logo-white.svg"
          layout="fill"
          priority
          alt="Clime"
        />
      </Flex>
      <Box maxW="720" mx="auto">
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '24px', md: '32px' }}
          lineHeight={{ base: '28px', md: '40px' }}
          fontWeight="700"
          textAlign="center"
          mb={{ base: '4', md: '8' }}
        >
          Storm preparedness:
          <br /> Essential items for your survival kit
        </Heading>
        <Text
          color="white"
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '24px' }}
          fontWeight="400"
          textAlign="center"
          mb={{ base: '4', md: '8' }}
        >
          Weather apps like{' '}
          <NextLink href="/" passHref>
            <Link
              href="/"
              isExternal
              color="#2DE886"
              textDecoration="underline"
            >
              Clime
            </Link>
          </NextLink>{' '}
          are like having a meteorologist in your back pocket. Clime’s
          hyper-local weather report offers the most accurate severe weather
          tracking so you can stay safe, no matter the situation.
        </Text>
        <Text
          color="white"
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '24px' }}
          fontWeight="400"
          textAlign="center"
          mb={{ base: '60px', md: '20' }}
        >
          But what about an emergency kit to prepare before the storm? We can
          help with that, too — read on to learn more.
        </Text>
        <Heading
          as="h2"
          color="white"
          fontSize={{ base: '20px', md: '24px' }}
          lineHeight={{ base: '24px', md: '30px' }}
          fontWeight="600"
          textAlign="center"
          mb="4"
        >
          How to prepare your{' '}
          <Text color="#F65050" as="span">
            storm kit
          </Text>
        </Heading>
        <Text
          color="white"
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '24px' }}
          fontWeight="400"
          textAlign="center"
          mb={{ base: '5', md: '4' }}
        >
          A storm preparedness survival kit should contain essential items that
          will help you and your family weather the storm and its aftermath.
          Here are 10 things you should consider including in your kit:
        </Text>
        <Flex
          pt="8"
          pb="4"
          px="5"
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.1) 100%)"
          borderRadius="16px"
          boxShadow="inset 0 2px 20px rgba(255, 255, 255, 0.05)"
          mb={{ base: '60px', md: '20' }}
        >
          <OrderedList
            color="white"
            ms="0"
            display="flex"
            flexFlow="column wrap"
            maxH={{ base: '100%', md: '350px' }}
            w="100%"
            css={{
              'align-content': 'space-between',
              'counter-reset': 'myCounter',
              '& li': {
                'list-style': 'none',
                'padding-bottom': '16px',
                display: 'flex',
                'font-size': '14px',
                'line-height': '18px',
                'max-width': '320px',
                [`@media not screen and (min-width: ${climeTheme.breakpoints.md})`]:
                  {
                    'max-width': '100%',
                  },
              },
              '& li:before': {
                'counter-increment': 'myCounter',
                content: 'counter(myCounter)',
                color: 'white',
                background: 'linear-gradient(180deg, #FF6060 0%, #F94545 100%)',
                'box-shadow': '0 2px 8px rgba(234, 67, 67, 0.2)',
                'border-radius': '6px',
                'text-align': 'center',
                margin: '0 10px 0 0',
                'line-height': '24px',
                'font-weight': '600',
                'font-size': '16px',
                width: '24px',
                height: '24px',
                flex: 'none',
              },
            }}
          >
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Water:
                </Text>{' '}
                Store at least one gallon of water per person per day for at
                least three days.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Non-perishable food:
                </Text>{' '}
                Canned food, protein bars, and other non-perishable items that
                can be stored for a long time are great options.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  First aid kit:
                </Text>{' '}
                Include bandages, antiseptic, pain relievers, and other medical
                supplies.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Flashlights and batteries:
                </Text>{' '}
                Have several flashlights on hand and make sure to pack extra
                batteries.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Cell phone charger:
                </Text>{' '}
                Keep a portable cell phone charger in your kit to keep your
                phone charged in case of a power outage.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Emergency radio:
                </Text>{' '}
                A battery-operated or hand-crank emergency radio can keep you
                up-to-date on weather conditions and essential communications.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Cash:
                </Text>{' '}
                Have some cash on hand in case credit card systems and ATMs are
                down.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Important documents:
                </Text>{' '}
                Keep copies of birth certificates, passports, and insurance
                policies in a waterproof container.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Blankets &amp; warm clothing:
                </Text>{' '}
                In case of power outages and cold temperatures, blankets and
                warm clothing are essential.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <Text as="span" fontWeight="700">
                  Personal hygiene items:
                </Text>{' '}
                Include things like toilet paper, soap, and hand sanitizer.
              </Text>
            </ListItem>
          </OrderedList>
        </Flex>
        <Heading
          as="h2"
          color="white"
          fontSize={{ base: '20px', md: '24px' }}
          lineHeight={{ base: '24px', md: '30px' }}
          fontWeight="600"
          textAlign="center"
          mb="4"
        >
          Tips for{' '}
          <Text color="#FAC310" as="span">
            children &amp; pets
          </Text>
        </Heading>
        <Text
          color="white"
          fontSize={{ base: '14px', md: '18px' }}
          lineHeight={{ base: '18px', md: '24px' }}
          fontWeight="400"
          textAlign="center"
          mb="5"
        >
          Children and pets require special attention during dangerous storms.
          Here are some tips for ensuring their safety:
        </Text>
        <Flex
          justify="space-between"
          flexDirection={{ base: 'column', md: 'unset' }}
        >
          <Box
            maxW={{ base: '100%', md: '352px' }}
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.1) 100%)"
            boxShadow="inset 0 2px 20px rgba(255, 255, 255, 0.05)"
            borderRadius="16px"
            px="4"
            pt="6"
            pb="2"
            mb={{ base: '5', md: '0' }}
          >
            <Text
              textAlign="center"
              pb="4"
              fontSize={{ base: '20px', md: '20px' }}
              lineHeight={{ base: '24px', md: '24px' }}
              fontWeight="600"
              color="white"
            >
              For children:
            </Text>
            <OrderedList
              color="white"
              ms="0"
              display="flex"
              flexFlow="column wrap"
              w="100%"
              css={{
                'align-content': 'space-between',
                'counter-reset': 'myCounter',
                '& li': {
                  'list-style': 'none',
                  'padding-bottom': '12px',
                  display: 'flex',
                  'font-size': '14px',
                  'line-height': '18px',
                },
                '& li:before': {
                  'counter-increment': 'myCounter',
                  content: 'counter(myCounter)',
                  color: 'white',
                  background:
                    'linear-gradient(180deg, #FAC310 0%, #FF8C1A 100%)',
                  'box-shadow': '0 2px 8px rgba(234, 67, 67, 0.2)',
                  'border-radius': '6px',
                  'text-align': 'center',
                  margin: '0 10px 0 0',
                  'line-height': '24px',
                  'font-weight': '600',
                  'font-size': '16px',
                  width: '24px',
                  height: '24px',
                  flex: 'none',
                },
              }}
            >
              <ListItem>
                <Text>
                  Explain the situation in age-appropriate language and reassure
                  them that they will be safe.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Have a family plan and make sure everyone knows what to do in
                  case of an emergency.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Pack a bag of favorite toys, books, and snacks to help keep
                  them occupied.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Have a designated safe area in your home, such as a basement
                  or interior room, where you can all gather during the storm.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Listen to their concerns and provide emotional support.
                </Text>
              </ListItem>
            </OrderedList>
          </Box>
          <Box
            maxW={{ base: '100%', md: '352px' }}
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.1) 100%)"
            boxShadow="inset 0 2px 20px rgba(255, 255, 255, 0.05)"
            borderRadius="16px"
            px="4"
            pt="6"
            pb="2"
          >
            <Text
              textAlign="center"
              pb="4"
              fontSize={{ base: '20px', md: '20px' }}
              lineHeight={{ base: '24px', md: '24px' }}
              fontWeight="600"
              color="white"
            >
              For pets:
            </Text>
            <OrderedList
              color="white"
              ms="0"
              display="flex"
              flexFlow="column wrap"
              w="100%"
              css={{
                'align-content': 'space-between',
                'counter-reset': 'myCounter',
                '& li': {
                  'list-style': 'none',
                  'padding-bottom': '20px',
                  display: 'flex',
                  'font-size': '14px',
                  'line-height': '18px',
                },
                '& li:before': {
                  'counter-increment': 'myCounter',
                  content: 'counter(myCounter)',
                  color: 'white',
                  background:
                    'linear-gradient(180deg, #FAC310 0%, #FF8C1A 100%)',
                  'box-shadow': '0 2px 8px rgba(234, 67, 67, 0.2)',
                  'border-radius': '6px',
                  'text-align': 'center',
                  margin: '0 10px 0 0',
                  'line-height': '24px',
                  'font-weight': '600',
                  'font-size': '16px',
                  width: '24px',
                  height: '24px',
                  flex: 'none',
                },
              }}
            >
              <ListItem>
                <Text>
                  Make sure they have identification tags and/or a microchip
                  with current information.
                </Text>
              </ListItem>
              <ListItem>
                <Text>Keep a carrier or crate handy for transportation.</Text>
              </ListItem>
              <ListItem>
                <Text>
                  Keep a supply of food, water, medications, and any other
                  necessary items.
                </Text>
              </ListItem>
              <ListItem>
                <Text>Have a leash and harness readily available.</Text>
              </ListItem>
              <ListItem>
                <Text>
                  Keep a photo in your survival kit in case you become
                  separated.
                </Text>
              </ListItem>
            </OrderedList>
          </Box>
        </Flex>
        <Flex
          mt={{ base: '60px', md: '80px' }}
          flexDirection={{ base: 'column', md: 'unset' }}
        >
          <Box w="100%">
            <Heading
              as="h2"
              color="white"
              fontSize="24px"
              lineHeight="28px"
              fontWeight="600"
              textAlign="center"
              mb="5"
            >
              Keep an eye on the weather <Text color="#2DE886">with Clime</Text>
            </Heading>
            <Text
              fontSize="14px"
              lineHeight="18px"
              fontWeight="400"
              color="white"
              mb="5"
              textAlign="center"
            >
              During a storm, it’s imperative to remain calm and stay informed.
              Clime makes keeping an eye on the weather easy, with the ability
              to set up severe weather and hurricane alerts for you and your
              loved ones, no matter where you call home.
            </Text>
            <Text
              fontSize="14px"
              lineHeight="18px"
              fontWeight="400"
              color="white"
              mb="5"
              textAlign="center"
            >
              In addition to following the tips above, be sure to download Clime
              in the{' '}
              <NextLink href={IOS_STORE_LINK} passHref>
                <Link
                  href={IOS_STORE_LINK}
                  isExternal
                  color="#2DE886"
                  textDecoration="underline"
                >
                  App Store
                </Link>
              </NextLink>{' '}
              and{' '}
              <NextLink href={ANDROID_STORE_LINK} passHref>
                <Link
                  href={ANDROID_STORE_LINK}
                  isExternal
                  color="#2DE886"
                  textDecoration="underline"
                >
                  Google Play
                </Link>
              </NextLink>{' '}
              and always listen to local authorities for guidance in the event
              of an emergency.
            </Text>
            <Flex justify="center" mx="auto">
              <NextLink href={IOS_STORE_LINK} passHref>
                <Link href={IOS_STORE_LINK} isExternal me="5">
                  <Image
                    src="/icons/app-store.svg"
                    width={143}
                    height={48}
                    alt="App Store"
                  />
                </Link>
              </NextLink>
              <NextLink href={ANDROID_STORE_LINK} passHref>
                <Link href={ANDROID_STORE_LINK} isExternal>
                  <Image
                    src="/icons/google-play.svg"
                    width={162}
                    height={48}
                    alt="Google Play"
                  />
                </Link>
              </NextLink>
            </Flex>
          </Box>
          <Box
            flex="none"
            ml={{ base: 'auto', md: '4' }}
            mr={{ base: 'auto', md: '0' }}
            mt={{ base: '10', md: '0' }}
          >
            <Image
              src="/img-storm-block4.png"
              width={341}
              height={428}
              alt="Clime radar"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default StormSurvivalKitPage;

StormSurvivalKitPage.Layout = StormSurvivalKitPageLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(!!locale && (await serverSideTranslations(locale, ['meta-tags']))),
  },
  revalidate: REVALIDATE_FOR_STATIC_GENERATED_PAGES,
});
