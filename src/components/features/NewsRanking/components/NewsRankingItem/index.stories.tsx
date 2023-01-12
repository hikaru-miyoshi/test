import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import NewsRankingItem from "./index";

export default {
  title: "Components/NewsRankingItem",
  component: NewsRankingItem,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "記事タイトル",
    },
    rank: {
      control: {
        type: "range",
        max: 5,
        min: 1,
        step: 1,
      },
      defaultValue: 1,
    },
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
  },
} as ComponentMeta<typeof NewsRankingItem>;

const Template: ComponentStory<typeof NewsRankingItem> = args => {
  const defaultImg = {
    src: "images/dummy/lorem-picsum-237.jpg",
    alt: "",
  };
  const { href = "#", thumbnail = defaultImg, ...attr } = args;
  let thumbnailData = thumbnail;
  if (thumbnailData instanceof Array && thumbnailData.length) {
    thumbnailData = {
      src: thumbnailData[0],
      alt: "",
    };
  }
  if (thumbnailData instanceof Array && !thumbnailData.length) {
    thumbnailData = defaultImg;
  }

  return <NewsRankingItem href={href} thumbnail={thumbnailData} {...attr} />;
};

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};
