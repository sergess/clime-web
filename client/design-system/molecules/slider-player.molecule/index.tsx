import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  IconButton,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FC, ReactElement, ReactNode, useMemo } from 'react';
import type { SliderProps } from '@chakra-ui/react';

export const SliderPlayer: FC<
  {
    playing: boolean;
    onPlayToggle: () => void;
    startLabel?: ReactNode;
    endLabel?: ReactNode;
    nowLabel?: ReactNode;
  } & SliderProps
> = ({
  playing,
  onPlayToggle,
  value,
  min,
  max,
  step,
  startLabel,
  nowLabel,
  endLabel,
  onChange,
  onChangeEnd,
}): ReactElement => {
  const stepMarks = useMemo(() => {
    const steps = Array.from(Array(max).keys());

    return steps.map((v, i) => (
      <SliderMark
        key={v}
        value={i * (step as number)}
        bg="gray.50"
        w={0.5}
        zIndex="mark"
        h={1}
        mt={-0.5}
        ms="-1px"
      />
    ));
  }, [max, step]);

  return (
    <Flex
      align="stretch"
      h="48px"
      px="4"
      bg="white"
      borderRadius="xl"
      maxW={{ md: 380 }}
      margin={{ md: '0 auto' }}
      boxShadow="player"
    >
      <Flex align="center" pe="3">
        <IconButton
          variant="player-button"
          aria-label={playing ? 'Play' : 'Pause'}
          icon={
            <Image
              src={`/icons/${playing ? 'pause' : 'play'}.svg`}
              width={24}
              height={24}
              alt={playing ? 'Playing' : 'Paused'}
            />
          }
          onClick={onPlayToggle}
        />
      </Flex>
      <Flex
        justify="flex-end"
        w="full"
        my="2"
        position="relative"
        flexDirection="column"
      >
        <Flex direction="column">
          <Flex w="full" justify="space-between" align="center" direction="row">
            <Flex>{startLabel && startLabel}</Flex>

            <Flex>{nowLabel && nowLabel}</Flex>

            <Flex>{endLabel && endLabel}</Flex>
          </Flex>

          <Flex mt="3px" mb="-3px" direction="row">
            {endLabel && (
              <Flex
                w={0}
                h={0}
                ms="auto"
                borderRadius="xl"
                borderLeft="3px solid"
                borderRight="3px solid"
                borderBottom="5px solid"
                borderColor="transparent"
                borderBottomColor="gray.100"
              />
            )}
          </Flex>
        </Flex>

        <Slider
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          onChangeEnd={onChangeEnd}
          focusThumbOnChange={false}
        >
          {stepMarks}

          <SliderTrack bg="gray.100" h="4px" borderRadius="sm" />

          <SliderFilledTrack
            bg="blue.100"
            h="4px"
            zIndex="track"
            borderRadius="sm"
          />

          <SliderThumb boxSize={4} bg="blue.500" zIndex="thumb" />
        </Slider>
      </Flex>
    </Flex>
  );
};

export default SliderPlayer;
