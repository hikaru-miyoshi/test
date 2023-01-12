import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import WriterDetail from "./index";

export default {
  title: "Ui/WriterDetail",
  component: WriterDetail,
  argTypes: {
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
    sns: {
      defaultValue: {
        homePage: { href: "#" },
        twitter: { href: "/" },
      },
    },
    name: {
      defaultValue: {
        kana: "かとうじゅんや",
        kanji: "加藤淳也（カト淳）",
      },
    },
    job: {
      defaultValue: "WEBライター",
    },
    description: {
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu",
    },
  },
} as ComponentMeta<typeof WriterDetail>;

const Template: ComponentStory<typeof WriterDetail> = args => {
  const defaultImg = {
    src: "https://picsum.photos/300/300",
    alt: "",
  };
  const { thumbnail = defaultImg, ...attr } = args;
  let thumbnailData = thumbnail;
  if (thumbnailData instanceof Array && thumbnailData.length) {
    thumbnailData = {
      src: thumbnailData[0],
      alt: "",
    };
  } else {
    thumbnailData = defaultImg;
  }
  return <WriterDetail thumbnail={thumbnailData} {...attr} />;
};

export const Default = Template.bind({});
Default.args = {};
