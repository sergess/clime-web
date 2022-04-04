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
import { useTranslation } from 'next-i18next';

import {
  WEATHER_TODAY,
  HOURLY_WEATHER,
  TEN_DAY_WEATHER,
  WEATHER_RADAR,
} from 'client/constants';
import { useUrlSlug, useClimeAppLink } from 'client/hooks';

import { NavigationOption } from './types';
import { isCurrentRoute } from './utils';
import { useButtonsVisibility } from './hooks';

export const TopNavigationBar = (
  componentProps: ComponentDefaultProps
): ReactElement => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const urlSlug = useUrlSlug();
  const navigationRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [shift, setShift] = useState<number>(0);

  const { leftButtonVisible, rightButtonVisible } = useButtonsVisibility(
    shift,
    navigationRef
  );

  const currentRouteRef = useCallback(
    (node) => {
      if (node !== null && navigationRef.current) {
        const { left, width } = node.getBoundingClientRect();
        navigationRef.current.scrollLeft = left < width ? 0 : left - width / 2;
      }
    },
    [navigationRef.current]
  );

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

  // [todo] add i18n git navigation labels
  const navigationOptions = useMemo<NavigationOption[]>(
    () => [
      {
        label: t('Today'),
        path: urlSlug && `/${WEATHER_TODAY}/${urlSlug}`,
        external: false,
      },
      {
        label: t('Hourly'),
        path: urlSlug && `/${HOURLY_WEATHER}/${urlSlug}`,
        external: false,
      },
      {
        label: t('Clime App'),
        path: climeAppLink,
        external: true,
      },
      {
        label: t('10-day forecast'),
        path: urlSlug && `/${TEN_DAY_WEATHER}/${urlSlug}`,
        external: false,
      },
      {
        label: 'Weather Radar',
        path: urlSlug && `/${WEATHER_RADAR}/${urlSlug}`,
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
          onClick={swipeLeft}
        >
          <Image src="/arrow-nav-left.png" width={48} height={48} alt="Left" />
        </Flex>
      )}
      <Flex
        as="nav"
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
        {navigationOptions.map(({ label, path, external }) => {
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
                variant="common-nav"
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
          onClick={swipeRight}
        >
          <Image
            src="/arrow-nav-right.png"
            width={48}
            height={48}
            alt="Right"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default TopNavigationBar;
