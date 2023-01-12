import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import url from "url";

import ProgramSnsCard from "./index";

export default {
  title: "Components/ProgramSnsCard",
  component: ProgramSnsCard,
  argTypes: {
    thumbnail: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".gif"],
      },
    },
    title: {
      control: "text",
      defaultValue: "タイトル",
    },
    date: {
      control: "text",
      defaultValue: "月〜金曜 15:40",
    },
    sns: {
      control: "object",
      defaultValue: {
        homePage: url.parse("#"),
        facebook: url.parse("#"),
        youtube: url.parse("#"),
        twitter: url.parse("#"),
        instagram: url.parse("#"),
        line: url.parse("#"),
        tiktok: url.parse("#"),
      },
    },
  },
} as ComponentMeta<typeof ProgramSnsCard>;

const Template: ComponentStory<typeof ProgramSnsCard> = args => {
  const defaultImg = {
    src: "https://picsum.photos/640/360",
    alt: "",
  };
  const { thumbnail = defaultImg, title, date, sns, ...attr } = args;
  let thumbnailData = thumbnail;
  if (thumbnailData instanceof Array && thumbnailData.length) {
    thumbnailData = {
      src: thumbnailData[0],
      alt: "",
    };
  } else {
    thumbnailData = defaultImg;
  }

  return <ProgramSnsCard thumbnail={thumbnailData} title={title} date={date} sns={sns} {...attr} />;
};

export const Default = Template.bind({});
