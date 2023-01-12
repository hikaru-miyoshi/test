import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { sliderDummies } from "@/utils/dummy";

import MainSlider from "./components/MainSlider";
import SlideItem from "./components/SlideItem";
import ThumbSlider from "./components/ThumbSlider";
import Slider from "./index";

export default {
  title: "Features/Slider",
  component: Slider,
  subcomponents: { MainSlider, ThumbSlider, SlideItem },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => {
  const { items = sliderDummies, ...attr } = args;

  return <Slider items={items} {...attr} />;
};

export const Basic = Template.bind({});
