import { ReactElement, memo, useMemo, useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { PinCardIcon } from 'client/design-system/atoms';
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
          <Text color="blue.800" textStyle="16-semi-bold" noOfLines={2}>
            {name}
          </Text>
          {exact && <PinCardIcon ms={2.5} />}
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
