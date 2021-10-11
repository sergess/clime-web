import React, { ReactElement, useRef, useCallback } from 'react';
import NextLink from 'next/link';
import { Flex, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { ClientOnly } from 'client/design-system/atoms';

import { TopNavigationBarProps } from './types';

export const TopNavigationBar = (): ReactElement => {
  // [TODO]  ${countryCode}/${city}/${forecastZoneId} will be got from state

  const navItems: TopNavigationBarProps[] = [
    {
      label: 'Today',
      url: `/weather-today/`,
      type: 'common-nav-link',
    },
    {
      label: 'Hourly',
      url: `/hourly-weather/`,
      type: 'common-nav-link',
    },
    {
      label: 'Clime App',
      url: '',
      type: 'app-nav-link',
    },
    {
      label: '10-day',
      url: `/ten-day-weather/`,
      type: 'common-nav-link',
    },
    {
      label: 'Weather Radar',
      url: `/weather-radar/`,
      type: 'common-nav-link',
    },
    {
      label: 'Alerts',
      url: `/alerts/`,
      type: 'alert-nav-link',
    },
  ];

  const router = useRouter();

  const navRef = useRef<HTMLDivElement>(null);

  const menuCurrentItemRef = useCallback((node) => {
    if (node != null && navRef.current) {
      const toCurrentMenuItem = node.getBoundingClientRect().left;
      navRef.current.scrollLeft = toCurrentMenuItem;
    }
  }, []);

  return (
    <ClientOnly>
      <Flex as="nav" bg="gray.50" py="4" overflowX="auto" ref={navRef}>
        {navItems.map((item) => (
          <NextLink key={item.label} href={item.url} passHref>
            <Button
              as="a"
              ref={router.pathname === item.url ? menuCurrentItemRef : null}
              flexShrink={0}
              aria-current={router.pathname === item.url && 'page'}
              variant={item.type}
            >
              {item.label}
            </Button>
          </NextLink>
        ))}
      </Flex>
    </ClientOnly>
  );
};

export default TopNavigationBar;
