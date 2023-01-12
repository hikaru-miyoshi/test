import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import url from "url";

import SnsIcon from "./index";

export default {
  title: "Components/SnsIcon",
  component: SnsIcon,
  argTypes: {
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
} as ComponentMeta<typeof SnsIcon>;

const Template: ComponentStory<typeof SnsIcon> = args => <SnsIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "SNSアイコン",
};
