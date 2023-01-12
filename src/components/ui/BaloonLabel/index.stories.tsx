import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import BaloonLabel from "./index";

export default {
  title: "Components/BaloonLabel",
  component: BaloonLabel,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "ラベル",
    },
  },
} as ComponentMeta<typeof BaloonLabel>;

const Template: ComponentStory<typeof BaloonLabel> = args => <BaloonLabel {...args}>{args.children}</BaloonLabel>;

export const Default = Template.bind({});
