import { ComponentMeta, ComponentStory } from "@storybook/react";
import { format } from "date-fns";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import ArticleItem from "./index";

export default {
  title: "Components/ArticleItem",
  component: ArticleItem,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "記事タイトル",
    },
    datetime: {
      control: "date",
      defaultValue: 1672326000000,
    },
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
  },
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = args => {
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
    <ArticleItem href={href} thumbnail={thumbnailData} datetime={formatDate} {...attr}>
      {args.children}
    </ArticleItem>
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};
