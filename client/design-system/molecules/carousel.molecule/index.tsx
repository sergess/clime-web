import { ReactElement, FC, useCallback } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
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
  carousel?: boolean;
}> = ({
  slidesPerView,
  slidesPerGroup = 1,
  onActiveIndexChange,
  spaceBetween = 20,
  navigation,
  carousel = true,
  children,
}): ReactElement => {
  const onSetActiveSwiperIndex = useCallback(({ activeIndex }: SwiperClass) => {
    onActiveIndexChange(activeIndex);
  }, []);

  if (carousel) {
    return (
      <Swiper
        spaceBetween={spaceBetween}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        onActiveIndexChange={onSetActiveSwiperIndex}
        rewind
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
  }

  return <>{children}</>;
};

export default Carousel;
