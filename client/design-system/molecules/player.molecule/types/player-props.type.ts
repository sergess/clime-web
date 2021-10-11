import { SliderProps } from '@chakra-ui/react';

export type PlayerProps = SliderProps & {
  startLabel: string;
  endLabel: string;
  nowLabel: string;
};

export default PlayerProps;
