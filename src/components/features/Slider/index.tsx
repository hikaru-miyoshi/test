import { FC, useState } from "react";

import MainSlider from "./components/MainSlider";
import ThumbSlider from "./components/ThumbSlider";
import styled from "./style.module.scss";
import { SliderItems } from "./types/slider-items";
import { SwiperState } from "./types/swiper";

type Props = {
  items: SliderItems;
};

const Slider: FC<Props> = props => {
  const { items } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperState>(null);

  return (
    <div className={styled.wrapper}>
      <div className={styled.mainWrapper}>
        <MainSlider items={items} thumbsSwiper={thumbsSwiper} />
      </div>

      <div className={styled.thumbsWrapper}>
        <ThumbSlider items={items} setThumbsSwiper={setThumbsSwiper} />
      </div>
    </div>
  );
};

export default Slider;
