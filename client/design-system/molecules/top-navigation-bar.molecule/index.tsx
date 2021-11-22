import React, { ReactElement, useRef, useCallback, useMemo } from 'react';
import NextLink from 'next/link';
import { ComponentDefaultProps, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import {
  WEATHER_TODAY,
  HOURLY_WEATHER,
  TEN_DAY_WEATHER,
  WEATHER_RADAR,
} from 'client/constants';
import { useUrlSlug, useClimeAppLink } from 'client/hooks';

import { NavigationOption } from './types';
import { isCurrentRoute } from './utils';

export const TopNavigationBar = (
  componentProps: ComponentDefaultProps
): ReactElement => {
  const router = useRouter();
  const urlSlug = useUrlSlug();
  const navigationRef = useRef<HTMLDivElement>(null);

  const currentRouteRef = useCallback((node) => {
    if (node !== null && navigationRef.current) {
      const { left, width } = node.getBoundingClientRect();

      navigationRef.current.scrollLeft = left < width ? 0 : left - width / 2;
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
        variant: 'app-nav',
        external: true,
      },
      {
        label: '10-day',
        path: urlSlug && `/${TEN_DAY_WEATHER}/${urlSlug}`,
        variant: 'common-nav',
        external: false,
      },
      {
        label: 'Weather Radar',
        path: urlSlug && `/${WEATHER_RADAR}/${urlSlug}`,
        variant: 'common-nav',
        external: false,
      },
    ],
    [urlSlug, climeAppLink]
  );

  return (
    <Flex
      {...componentProps}
      as="nav"
      bg="gray.50"
      overflowX="auto"
      ref={navigationRef}
      css={{
        '&::-webkit-scrollbar': {
          width: 0,
          height: 0,
        },
      }}
      sx={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
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
  );
};

export default TopNavigationBar;
