import { ReactElement, FC, useCallback } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carousel: FC<{
  slidesPerView: number;
  slidesPerGroup?: number;
  spaceBetween?: number;
  onActiveIndexChange: (index: number) => void;
  navigation: {
    prevEl: string;
    nextEl: string;
  };
}> = ({
  slidesPerView,
  slidesPerGroup = 1,
  onActiveIndexChange,
  spaceBetween = 20,
  navigation,
  children,
}): ReactElement => {
  const onSetActiveSwiperIndex = useCallback(({ activeIndex }: SwiperClass) => {
    onActiveIndexChange(activeIndex);
  }, []);

  return (
    <Swiper
      spaceBetween={spaceBetween}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      onActiveIndexChange={onSetActiveSwiperIndex}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={navigation}
      threshold={20}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
