import { ReactElement, memo, useMemo, useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { useCookies, useLocationData } from 'client/hooks';
import { isLocationACloseToLocationB } from 'client/utils';

import {
  EXACT_LATITUDE_COOKIE,
  EXACT_LONGITUDE_COOKIE,
} from 'common/constants';

import { LocationInfoRowProps } from './types';
import { getFullLocationName } from './utils';

export const LocationInfoRow = memo(
  ({ date, componentStyles, heading }: LocationInfoRowProps): ReactElement => {
    const locationData = useLocationData();

    const name = useMemo(
      () => getFullLocationName(locationData),
      [locationData]
    );

    const { cookies } = useCookies([
      EXACT_LATITUDE_COOKIE,
      EXACT_LONGITUDE_COOKIE,
    ]);

    const [exact, setExact] = useState(false);

    useEffect(() => {
      const [latitudeCookie, longitudeCookie] = cookies as (
        | string
        | undefined
      )[];

      const close = isLocationACloseToLocationB(
        {
          latitude: Number(locationData?.latitude),
          longitude: Number(locationData?.longitude),
        },
        {
          latitude: Number(latitudeCookie),
          longitude: Number(longitudeCookie),
        }
      );

      if (close !== exact) {
        setExact(close);
      }
    }, [locationData, cookies, exact]);

    return (
      <Flex
        {...componentStyles}
        w="full"
        justify="space-between"
        flexWrap={heading ? 'wrap' : 'nowrap'}
      >
        <Flex w="full" pb={2}>
          <Text
            pos="relative"
            color="blue.800"
            textStyle="16-card-title"
            noOfLines={2}
            pe={5}
          >
            {name}
            {exact && (
              <Box as="span" pos="absolute" top="2px" right={0} w={4} h={4}>
                <Image
                  src="/icons/pin-card.svg"
                  alt="Exact location"
                  width={16}
                  height={16}
                />
              </Box>
            )}
          </Text>
        </Flex>
        {heading}
        <Text color="gray.500" textStyle="16-medium">
          {date}
        </Text>
      </Flex>
    );
  }
);

LocationInfoRow.displayName = 'LocationInfoRow';

export default LocationInfoRow;
