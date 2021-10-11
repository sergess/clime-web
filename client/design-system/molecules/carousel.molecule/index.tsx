import React, {
  ReactElement,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Box, ComponentDefaultProps, Flex, IconButton } from '@chakra-ui/react';

import { Arrow2Icon } from 'client/design-system/atoms';

import { useContainerWidth } from 'client/hooks';

export const Carousel = ({ children }: ComponentDefaultProps): ReactElement => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shift, setShift] = useState(0);

  const carouselWrapperWidth = useContainerWidth(carouselWrapperRef);
  const carouselWidth = useContainerWidth(carouselRef);

  const numberOfSlides = carouselRef.current
    ? carouselRef.current.children.length
    : 0;

  const onLeftSlideButtonClick = useCallback(
    () => setCurrentIndex((prevCount) => prevCount - 1),
    []
  );
  const onRightSlideButtonClick = useCallback(
    () => setCurrentIndex((prevCount) => prevCount + 1),
    []
  );
  const rightSlideButtonVisible = useMemo(
    () => carouselWrapperWidth + shift < carouselWidth,
    [carouselWrapperWidth, carouselWidth, shift]
  );

  useEffect(() => {
    const shiftValue = (carouselWidth / numberOfSlides) * currentIndex;
    setShift(shiftValue);
  }, [currentIndex, carouselWidth]);

  return (
    <Flex w="full">
      <Flex w="16px" align="stretch">
        {currentIndex > 0 && (
          <IconButton
            onClick={onLeftSlideButtonClick}
            variant="carousel-control"
            aria-label="Left"
            icon={<Arrow2Icon transform="rotate(180deg)" />}
          />
        )}
      </Flex>
      <Box w="full" overflow="hidden" ref={carouselWrapperRef}>
        <Flex
          direction="row"
          d="inline-flex"
          ref={carouselRef}
          transform={`translateX(-${shift}px)`}
          transition="all 0.3s linear"
        >
          {children}
        </Flex>
      </Box>
      <Flex w="16px" align="stretch">
        {rightSlideButtonVisible && (
          <IconButton
            variant="carousel-control"
            onClick={onRightSlideButtonClick}
            aria-label="Right"
            icon={<Arrow2Icon />}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Carousel;
