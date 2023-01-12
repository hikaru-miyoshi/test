import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import SectionLabel from "./index";

export default {
  title: "Components/SectionLabel",
  component: SectionLabel,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof SectionLabel>;

const Template: ComponentStory<typeof SectionLabel> = args => <SectionLabel {...args}>{args.children}</SectionLabel>;

export const Default = Template.bind({});
Default.parameters = {
  screenshot: screenshotOptions,
};
Default.args = {
  children: "SERIES",
};
