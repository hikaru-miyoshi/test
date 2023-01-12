import Link from "next/link";
import { FC, memo } from "react";
import { Mousewheel, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SliderItem, SliderItems } from "../../types/slider-items";
import { SwiperState } from "../../types/swiper";
import styled from "./style.module.scss";

type Props = {
  thumbsSwiper: SwiperState;
  items: SliderItems;
};

const MainSlider: FC<Props> = memo(props => {
  const { thumbsSwiper, items } = props;

  return (
    <Swiper
      modules={[Thumbs, Mousewheel]}
      className={styled.mainSlide}
      direction="horizontal"
      thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
      }}
      mousewheel={true}
      breakpoints={{
        768: {
          direction: "vertical",
        },
      }}
    >
      {items &&
        items.map((d: SliderItem, i: number) => {
          return (
            <SwiperSlide className={styled.mainSlide__slides} key={`main-${d.title}-${i}`}>
              <Link href={d.href} legacyBehavior>
                <a>
                  <img src={d.thumbnail.src} alt={d.thumbnail?.src} />
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
});

export default MainSlider;
