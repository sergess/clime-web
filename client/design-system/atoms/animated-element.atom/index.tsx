import { ReactElement, FC } from 'react';
import {
  Box,
  ComponentDefaultProps,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

export const AnimatedElement: FC<
  { animation: string; node: ReactElement } & ComponentDefaultProps
> = ({ node, animation, ...rest }): ReactElement => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animate = prefersReducedMotion ? undefined : animation;

  return (
    <Box animation={animate} {...rest}>
      {node}
    </Box>
  );
};

export default AnimatedElement;
