import { Thumbnail } from "@/types/thumbnail";

type SliderItem = {
  href: string;
  thumbnail: Thumbnail;
  title: string;
  datetime: string;
};
type SliderItems = SliderItem[];
