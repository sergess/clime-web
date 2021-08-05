import { ReactElement } from 'react';
import { Box, useStyleConfig, ComponentDefaultProps } from '@chakra-ui/react';

const Card = ({
  variant,
  children,
  ...rest
}: ComponentDefaultProps): ReactElement => {
  const styles = useStyleConfig('Card', { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default Card;
