import React, {
  ReactElement,
  useRef,
  useCallback,
  useMemo,
  useState,
  MutableRefObject,
} from 'react';
import NextLink from 'next/link';
import { ComponentDefaultProps, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import {
  WEATHER_TODAY,
  HOURLY_WEATHER,
  TEN_DAY_WEATHER,
} from 'client/constants';
import { useUrlSlug, useClimeAppLink } from 'client/hooks';

import { NavigationOption } from './types';
import { isCurrentRoute } from './utils';
import { useButtonsVisibility } from './hooks';

export const TopNavigationBar = (
  componentProps: ComponentDefaultProps
): ReactElement => {
  const router = useRouter();
  const urlSlug = useUrlSlug();
  const navigationRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [shift, setShift] = useState<number>(0);

  const { leftButtonVisible, rightButtonVisible } = useButtonsVisibility(
    shift,
    navigationRef
  );

  const currentRouteRef = useCallback((node) => {
    if (node !== null && navigationRef.current) {
      const { left, width } = node.getBoundingClientRect();
      navigationRef.current.scrollLeft = left < width ? 0 : left - width / 2;
    }
  }, []);

  const onScroll = useCallback(() => {
    if (navigationRef.current) {
      setShift(navigationRef.current.scrollLeft);
    }
  }, []);

  const swipeLeft = useCallback(() => {
    if (navigationRef.current) {
      navigationRef.current.scrollLeft = 0;
    }
  }, []);

  const swipeRight = useCallback(() => {
    if (navigationRef.current) {
      const width = navigationRef.current.scrollWidth;
      navigationRef.current.scrollLeft = width;
    }
  }, []);

  const climeAppLink = useClimeAppLink();

  const navigationOptions = useMemo<NavigationOption[]>(
    () => [
      {
        label: 'Today',
        path: urlSlug && `/${WEATHER_TODAY}/${urlSlug}`,
        variant: 'common-nav',
        external: false,
      },
      {
        label: 'Hourly',
        path: urlSlug && `/${HOURLY_WEATHER}/${urlSlug}`,
        variant: 'common-nav',
        external: false,
      },
      {
        label: 'Clime App',
        path: climeAppLink,
        variant: 'common-nav',
        external: true,
      },
      {
        label: '10-day',
        path: urlSlug && `/${TEN_DAY_WEATHER}/${urlSlug}`,
        variant: 'common-nav',
        external: false,
      },
    ],
    [urlSlug, climeAppLink]
  );

  return (
    <Flex position="relative" alignItems="center" {...componentProps}>
      {leftButtonVisible && (
        <Flex
          position="absolute"
          left="0"
          boxSize="48px"
          justifyContent="flex-end"
          bg="linear-gradient(270deg, #EFF3F8 42.93%, rgba(239, 243, 248, 0) 100%)"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
          onClick={swipeLeft}
        >
          <Image
            src="/icons/arrow-100.svg"
            width={20}
            height={20}
            alt="Left"
            priority
          />
        </Flex>
      )}
      <Flex
        as="nav"
        bg="gray.50"
        overflowX="auto"
        ref={navigationRef}
        m="-3px"
        p="3px"
        css={{
          '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
            display: 'none',
          },
        }}
        sx={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onScroll={onScroll}
      >
        {navigationOptions.map(({ label, variant, path, external }) => {
          if (!path) return null;

          const currentRoute = isCurrentRoute(router.asPath, path);

          return (
            <NextLink key={label} href={path} passHref>
              <Link
                bg="white"
                whiteSpace="nowrap"
                alignItems="center"
                borderRadius="3xl"
                textStyle="16-semi-bold"
                d="flex"
                h="38px"
                px="5"
                ms={['2', '3']}
                _first={{ ms: 0 }}
                isExternal={external}
                href={path}
                ref={currentRoute ? currentRouteRef : null}
                flexShrink={0}
                aria-current={currentRoute && 'page'}
                variant={variant}
              >
                {label}
              </Link>
            </NextLink>
          );
        })}
      </Flex>
      {rightButtonVisible && (
        <Flex
          position="absolute"
          right="0"
          boxSize="48px"
          justifyContent="flex-end"
          bg="linear-gradient(270deg, #EFF3F8 42.93%, rgba(239, 243, 248, 0) 110%)"
          onClick={swipeRight}
        >
          <Image
            src="/icons/arrow-100.svg"
            width={20}
            height={20}
            alt="Right"
            priority
          />
        </Flex>
      )}
    </Flex>
  );
};

export default TopNavigationBar;
