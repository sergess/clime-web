import React, {
  useState,
  ReactElement,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  Box,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
} from '@chakra-ui/react';
import Image from 'next/image';

import { useContainerWidth } from 'client/hooks';

import { PlayerProps } from './types';

export const Player = ({
  defaultValue,
  min,
  max,
  step,
  endLabel,
  startLabel,
  nowLabel,
  onChangeEnd,
}: PlayerProps): ReactElement => {
  const sliderWrapperRef = useRef(null);
  const sliderWidth = useContainerWidth(sliderWrapperRef);
  const nowValue = useMemo(
    () => !!max && !!defaultValue && (sliderWidth / max) * defaultValue,
    [sliderWidth, max, defaultValue]
  );

  const [paused, setPaused] = useState(false);

  const onTogglePaused = useCallback(() => {
    setPaused(!paused);
  }, [paused]);

  return (
    <Flex align="stretch" h="48px" ps="4" pe="2.5" bg="white" borderRadius="xl">
      <Flex align="center" pe="3">
        <IconButton
          variant="player-button"
          aria-label="Pause"
          icon={
            <Image
              src={paused ? '/icons/pause.svg' : '/icons/play.svg'}
              width={24}
              height={24}
              alt={paused ? 'Pause' : 'Play'}
            />
          }
          onClick={onTogglePaused}
        />
      </Flex>
      <Flex
        justify="flex-end"
        w="full"
        my="2"
        position="relative"
        flexDirection="column"
        ref={sliderWrapperRef}
      >
        <Flex w="full" justify="space-between" position="relative">
          <Text textStyle="12-semi-bold" color="gray.600">
            {startLabel}
          </Text>
          <Text
            textStyle="12-medium"
            color="gray.400"
            position="absolute"
            transform="translateX(-50%)"
            left={`${nowValue}px`}
          >
            {nowLabel}
          </Text>
          <Text textStyle="12-semi-bold" color="gray.600">
            {endLabel}
          </Text>
        </Flex>
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChangeEnd={onChangeEnd}
        >
          <Box
            w="1px"
            h="12px"
            bg="gray.400"
            position="absolute"
            left={`${nowValue}px`}
            zIndex="1"
            top={0.5}
          />
          <SliderTrack bg="gray.100">
            <SliderFilledTrack bg="blue.100" />
          </SliderTrack>
          <SliderThumb boxSize={4} bg="blue.500" />
        </Slider>
      </Flex>
    </Flex>
  );
};

export default Player;
