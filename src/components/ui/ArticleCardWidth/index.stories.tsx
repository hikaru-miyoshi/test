import { ComponentMeta, ComponentStory } from "@storybook/react";
import { format } from "date-fns";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import ArticleCardWidth from "./index";

export default {
  title: "Components/ArticleCardWidth",
  component: ArticleCardWidth,
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
    rank: {
      control: {
        type: "range",
        max: 20,
        step: 1,
      },
      defaultValue: 1,
    },
    changed: {
      control: "select",
      options: ["up", "down", "invariant"],
      defaultValue: "up",
    },
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
    favCount: {
      control: {
        type: "range",
        max: 200,
        step: 1,
      },
      defaultValue: 123,
    },
  },
} as ComponentMeta<typeof ArticleCardWidth>;

const Template: ComponentStory<typeof ArticleCardWidth> = args => {
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
    <ArticleCardWidth
      href={href}
      thumbnail={thumbnailData}
      datetime={formatDate}
      label={{ text: "ラベル", variant: "red" }}
      {...attr}
    />
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};
