import { SliderItem, SliderItems } from "@/components/features/Slider/types/slider-items";

export const sliderDummies: SliderItems = Array(10)
  .fill(0)
  .map((_: any, i: number) => {
    return {
      href: "#",
      thumbnail: {
        src: "https://picsum.photos/620/350.jpg",
        alt: "",
      },
      title: `スライダー${i + 1}`,
    } as SliderItem;
  });
