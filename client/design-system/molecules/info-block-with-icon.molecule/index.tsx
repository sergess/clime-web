import { FC, ReactElement, ReactNode } from 'react';
import { Flex, Center, Text, StyleProps } from '@chakra-ui/react';
import Image from 'next/image';

export const InfoBlockWithIcon: FC<
  {
    iconSrc: string;
    iconAlt: string;
    label: string;
    text: ReactNode;
  } & StyleProps
> = ({ iconSrc, iconAlt, label, text, flex }): ReactElement => (
  <Flex flex={flex}>
    <Center me={2} p={1}>
      <Image src={iconSrc} alt={iconAlt} width={32} height={32} />
    </Center>

    <Flex direction="column" justify="center">
      <Text textStyle="14-medium" color="gray.500" mb={1}>
        {label}
      </Text>
      <Text textStyle="16-semi-bold" color="blue.800">
        {text}
      </Text>
    </Flex>
  </Flex>
);

export default InfoBlockWithIcon;
