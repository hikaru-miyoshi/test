import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ContentSection from "./index";

export default {
  title: "Components/ContentSection",
  component: ContentSection,
  argTypes: {
    children: { control: "text" },
    height: {
      control: "number",
      defaultValue: 300,
    },
    open: {
      control: "boolean",
      defaultValue: "false",
    },
  },
} as ComponentMeta<typeof ContentSection>;

const Template: ComponentStory<typeof ContentSection> = args => (
  <ContentSection {...args}>{args.children}</ContentSection>
);

export const Default = Template.bind({});
Default.args = {};
