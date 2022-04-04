import React, { ReactElement } from 'react';
import { ComponentDefaultProps, Flex, useStyleConfig } from '@chakra-ui/react';

export const ColorScale = ({
  variant,
  children,
  ...rest
}: ComponentDefaultProps): ReactElement => {
  const styles = useStyleConfig('ColorScale', { variant });

  return (
    <Flex __css={styles} {...rest}>
      {children}
    </Flex>
  );
};

export default ColorScale;
