import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Icon from "./index";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    src: {
      control: "text",
      defaultValue: "/icon/heart.png",
    },
    alt: {
      control: "text",
      defaultValue: "heart",
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Basic = Template.bind({});
