import React, { ReactElement, useRef, useCallback } from 'react';
import NextLink from 'next/link';
import { Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { TopNavigationBarProps } from './types';

// [TODO]  ${countryCode}/${city}/${forecastZoneId} will be got from state
const navItems: TopNavigationBarProps[] = [
  {
    label: 'Today',
    path: `/weather-today`,
    variant: 'common-nav',
  },
  {
    label: 'Hourly',
    path: `/hourly-weather`,
    variant: 'common-nav',
  },
  {
    label: 'Clime App',
    path: 'https://apps.apple.com/us/app/id749133753',
    variant: 'app-nav',
    isExternal: true,
  },
  {
    label: '10-day',
    path: `/ten-day-weather`,
    variant: 'common-nav',
  },
  {
    label: 'Weather Radar',
    path: `/weather-radar`,
    variant: 'common-nav',
  },
  {
    label: 'Alerts',
    path: `/alerts`,
    variant: 'alert-nav',
  },
];

export const TopNavigationBar = (): ReactElement => {
  const router = useRouter();

  const navRef = useRef<HTMLDivElement>(null);

  const menuCurrentItemRef = useCallback((node) => {
    if (node != null && navRef.current) {
      const toCurrentMenuItem = node.getBoundingClientRect().left;
      navRef.current.scrollLeft = toCurrentMenuItem;
    }
  }, []);

  return (
    <Flex as="nav" bg="gray.50" py="4" overflowX="auto" ref={navRef}>
      {navItems.map((item) => {
        const isCurrent = router.pathname === item.path;
        return (
          <NextLink key={item.label} href={item.path} passHref>
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
              isExternal={item.isExternal}
              href={item.path}
              ref={isCurrent ? menuCurrentItemRef : null}
              flexShrink={0}
              aria-current={isCurrent && 'page'}
              variant={item.variant}
            >
              {item.label}
            </Link>
          </NextLink>
        );
      })}
    </Flex>
  );
};

export default TopNavigationBar;
