import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import SeriesCard from "./index";

export default {
  title: "Components/SeriesCard",
  component: SeriesCard,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    title: {
      control: "text",
      defaultValue: "ヘディング",
    },
    transparent: {
      control: "boolean",
      defaultValue: false,
    },
    items: {
      control: {
        type: "object",
      },
      defaultValue: [
        {
          thumbnail: {
            src: "images/dummy/lorem-picsum-237.jpg",
            alt: "",
          },
          title: "記事タイトルが入ります",
          href: "#",
        },
        {
          thumbnail: {
            src: "images/dummy/lorem-picsum-237.jpg",
            alt: "",
          },
          title: "記事タイトルが入ります",
          href: "#",
        },
      ],
    },
  },
} as ComponentMeta<typeof SeriesCard>;

const Template: ComponentStory<typeof SeriesCard> = args => {
  return <SeriesCard more="#" {...args} />;
};

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};
