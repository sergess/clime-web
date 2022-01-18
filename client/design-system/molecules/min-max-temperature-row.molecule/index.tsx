import { ReactElement, FC, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { ClientOnly } from 'client/design-system/atoms';

export const MinMaxTemperatureRow: FC<{
  max: number | string;
  min: number | string;
}> = memo(
  ({ max, min }): ReactElement => (
    <Flex>
      <Flex pr={2} borderRight="1px solid" borderColor="gray.100">
        <Image
          src="/icons/arrow-1-colored-max.svg"
          alt="Max temperature"
          width={14}
          height={14}
        />
        <Text ms={1} textStyle="14-medium" color="blue.800">
          <ClientOnly>{max}&#176;</ClientOnly>
        </Text>
      </Flex>
      <Flex pl={2}>
        <Image
          src="/icons/arrow-1-colored-min.svg"
          alt="Min temperature"
          width={14}
          height={14}
        />
        <Text ms={1} textStyle="14-medium" color="blue.800">
          <ClientOnly>{min}&#176;</ClientOnly>
        </Text>
      </Flex>
    </Flex>
  )
);

MinMaxTemperatureRow.displayName = 'MinMaxTemperatureRow';

export default MinMaxTemperatureRow;
