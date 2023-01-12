import { ComponentMeta, ComponentStory } from "@storybook/react";
import { format } from "date-fns";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import ArticleCard from "./index";

export default {
  title: "Components/ArticleCard",
  component: ArticleCard,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    title: {
      control: "text",
      defaultValue: "記事タイトル",
    },
    datetime: {
      control: "date",
      defaultValue: 1672326000000,
    },
    count: {
      control: {
        type: "range",
        max: 200,
        step: 1,
      },
      defaultValue: 123,
    },
    transparent: {
      control: "boolean",
      defaultValue: false,
    },
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
  },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = args => {
  const defaultImg = {
    src: "images/dummy/lorem-picsum-237.jpg",
    alt: "",
  };
  const { href = "#", thumbnail = defaultImg, datetime, ...attr } = args;
  const formatDate = format(Number(datetime), "y.M.d");
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

  return (
    <ArticleCard
      href={href}
      thumbnail={thumbnailData}
      datetime={formatDate}
      label={{ text: "ラベル", variant: "blue" }}
      {...attr}
    />
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};

