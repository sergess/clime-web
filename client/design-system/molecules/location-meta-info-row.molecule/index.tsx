import { ReactElement, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { PinCardIcon } from 'client/design-system/atoms';

import { LocationMetaInfoRowProps } from './types';

export const LocationMetaInfoRow = memo(
  ({
    exact,
    name,
    date,
    componentStyles,
  }: LocationMetaInfoRowProps): ReactElement => (
    <Flex {...componentStyles} w="full" justify="space-between">
      <Flex>
        {exact && <PinCardIcon me={2.5} />}

        <Text color="blue.800" textStyle="16-card-title" noOfLines={2}>
          {name}
        </Text>
      </Flex>

      <Flex>
        <Text color="gray.500" textStyle="16-medium">
          {date}
        </Text>
      </Flex>
    </Flex>
  )
);

LocationMetaInfoRow.displayName = 'LocationMetaInfoRow';

export default LocationMetaInfoRow;
