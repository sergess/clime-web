import React, { ReactElement, useRef, useCallback } from 'react';
import NextLink from 'next/link';
import { Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { TopNavigationBarProps } from './types';

// [TODO]  ${countryCode}/${city}/${forecastZoneId} will be got from state
const navItems: TopNavigationBarProps[] = [
  {
    label: 'Today',
    url: `/weather-today`,
    type: 'common-nav-link',
  },
  {
    label: 'Hourly',
    url: `/hourly-weather`,
    type: 'common-nav-link',
  },
  {
    label: 'Clime App',
    url: 'https://apps.apple.com/us/app/id749133753',
    type: 'app-nav-link',
    isExternal: true,
  },
  {
    label: '10-day',
    url: `/ten-day-weather`,
    type: 'common-nav-link',
  },
  {
    label: 'Weather Radar',
    url: `/weather-radar`,
    type: 'common-nav-link',
  },
  {
    label: 'Alerts',
    url: `/alerts`,
    type: 'alert-nav-link',
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
      {navItems.map((item) => (
        <NextLink key={item.label} href={item.url} passHref>
          <Link
            isExternal={item.isExternal}
            href={item.url}
            ref={router.pathname === item.url ? menuCurrentItemRef : null}
            flexShrink={0}
            aria-current={router.pathname === item.url && 'page'}
          >
            {item.label}
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default TopNavigationBar;
