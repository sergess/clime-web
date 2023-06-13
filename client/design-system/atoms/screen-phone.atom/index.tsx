import React, { ReactElement, FC } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';
import Image from 'next/image';

export const ScreenPhone: FC<{ screen: ReactElement } & ComponentDefaultProps> =
  ({ screen, ...rest }): ReactElement => (
    <Box pos="relative" {...rest} boxShadow="device" borderRadius="58px">
      <Box letterSpacing={0} wordSpacing={0} fontSize={0}>
        <Image src="/img-index-phone.png" width={334} height={680} />
      </Box>
      <Box
        pos="absolute"
        top="13px"
        left="16px"
        bottom="13px"
        right="16px"
        borderRadius={32}
        overflow="hidden"
      >
        {screen}
      </Box>
    </Box>
  );

export default ScreenPhone;
