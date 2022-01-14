import { ReactElement, useCallback } from 'react';
import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';

import { ForecastCarouselProps } from './types';

import 'swiper/css';
import 'swiper/css/navigation';

export const DetailedForecastCarousel = <T,>({
  data,
  slidesPerView,
  slidesPerGroup = 1,
  renderItem,
  onActiveIndexChange,
}: ForecastCarouselProps<T>): ReactElement => {
  const onSetActiveSwiperIndex = useCallback(({ activeIndex }: SwiperClass) => {
    onActiveIndexChange(activeIndex);
  }, []);

  return (
    <Flex width="full">
      <Swiper
        modules={[Navigation, Virtual]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        onActiveIndexChange={onSetActiveSwiperIndex}
        navigation={{
          prevEl: '.swiper-prev-control',
          nextEl: '.swiper-next-control',
        }}
        threshold={20}
        virtual
      >
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index} virtualIndex={index}>
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
