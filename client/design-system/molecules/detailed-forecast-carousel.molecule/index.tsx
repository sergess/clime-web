import { ReactElement, useCallback } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';

import { Arrow2Icon } from 'client/design-system/atoms';

import { ForecastCarouselProps } from './types';

import 'swiper/css';
import 'swiper/css/navigation';

export const DetailedForecastCarousel = <T,>({
  data,
  slidesPerView,
  renderItem,
  onActiveIndexChange,
  componentStyles,
}: ForecastCarouselProps<T>): ReactElement => {
  const onSetActiveSwiperIndex = useCallback(({ activeIndex }: SwiperClass) => {
    onActiveIndexChange(activeIndex);
  }, []);

  return (
    <Flex {...componentStyles} width="full">
      <IconButton
        className="swiper-prev-control"
        variant="carousel-control"
        aria-label="Left"
        icon={<Arrow2Icon w={5} h={20} transform="rotate(180deg)" />}
        position="absolute"
        top={0}
        left={0}
      />

      <IconButton
        className="swiper-next-control"
        variant="carousel-control"
        aria-label="Right"
        icon={<Arrow2Icon w={5} h={20} />}
        position="absolute"
        top={0}
        right={0}
      />

      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        onBeforeInit={onSetActiveSwiperIndex}
        onActiveIndexChange={onSetActiveSwiperIndex}
        navigation={{
          prevEl: '.swiper-prev-control',
          nextEl: '.swiper-next-control',
        }}
      >
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            {renderItem({
              index,
              item,
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default DetailedForecastCarousel;
