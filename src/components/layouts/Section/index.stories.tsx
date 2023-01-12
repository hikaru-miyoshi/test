import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DummyBox } from "@/utils/storybook";

import Section from "./index";

export default {
  title: "Layouts/Section",
  component: Section,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["white", "gray", "pink"],
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = args => {
  return (
    <Section {...args}>
      <DummyBox>Section Layout</DummyBox>
    </Section>
  );
};

export const Default = Template.bind({});
