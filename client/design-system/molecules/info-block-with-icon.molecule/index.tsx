import { ReactElement } from 'react';
import { Flex, Center, Text, StyleProps } from '@chakra-ui/react';

import { InfoBlockWithIconProps } from './types';

export const InfoBlockWithIcon = ({
  icon,
  label,
  text,
  flex,
}: InfoBlockWithIconProps & StyleProps): ReactElement => (
  <Flex flex={flex}>
    <Center
      bgGradient="linear(to-b, #3C83E800, #3C83E814)"
      borderRadius={12}
      me={2}
      p={1}
    >
      {icon}
    </Center>

    <Flex direction="column" justify="center">
      <Text textStyle="14-medium" color="gray.500" mb={1}>
        {label}
      </Text>
      <Text textStyle="16-semi-bold" color="blue.800">
        {text || '-'}
      </Text>
    </Flex>
  </Flex>
);

export default InfoBlockWithIcon;
