import React, { ReactElement } from 'react';
import { ComponentDefaultProps, Flex, useStyleConfig } from '@chakra-ui/react';

export const Legend = ({
  variant,
  children,
  ...rest
}: ComponentDefaultProps): ReactElement => {
  const styles = useStyleConfig('Legend', { variant });
  return (
    <Flex __css={styles} {...rest}>
      {children}
    </Flex>
  );
};

export default Legend;
