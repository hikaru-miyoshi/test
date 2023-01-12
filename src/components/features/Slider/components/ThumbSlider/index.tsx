import { Dispatch, FC, memo, SetStateAction } from "react";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderItem, SliderItems } from "../../types/slider-items";
import { SwiperState } from "../../types/swiper";
import SlideItem from "../SlideItem";
import styled from "./style.module.scss";

type Props = {
  setThumbsSwiper: Dispatch<SetStateAction<SwiperState>>;
  items: SliderItems;
};

const ThumbSlider: FC<Props> = memo(props => {
  const { setThumbsSwiper, items } = props;

  return (
    <Swiper
      modules={[Mousewheel]}
      watchSlidesProgress
      onSwiper={setThumbsSwiper}
      className={styled.thumbs}
      direction="horizontal"
      slidesPerView={2}
      spaceBetween={5}
      slideToClickedSlide={true}
      centeredSlides={false}
      centeredSlidesBounds={false}
      grabCursor={true}
      mousewheel={true}
      breakpoints={{
        768: {
          direction: "vertical",
          slidesPerView: 3,
          centeredSlides: true,
          centeredSlidesBounds: true,
          spaceBetween: 10,
        },
      }}
    >
      {items &&
        items.map((d: SliderItem, i: number) => {
          return (
            <SwiperSlide className={styled.thumbs__slides} key={`thumb-${d.title}-${i}`}>
              {({ isActive }) => (
                <SlideItem
                  thumbnail={{ src: d.thumbnail.src, alt: d.thumbnail?.alt }}
                  title={d.title}
                  datetime={d.datetime}
                  active={isActive}
                />
              )}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
});

export default ThumbSlider;
