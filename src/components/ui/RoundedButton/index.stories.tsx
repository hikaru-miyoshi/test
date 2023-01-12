import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DummyHStack, screenshotOptions } from "@/utils/storybook";

import RoundedButton from "./index";

export default {
  title: "Components/RoundedButton",
  component: RoundedButton,
  argTypes: {
    children: { control: "text" },
    active: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = args => <RoundedButton {...args}>{args.children}</RoundedButton>;

export const Basic = Template.bind({});
Basic.args = {
  children: "24時間",
};

const AllTemplate: ComponentStory<typeof RoundedButton> = () => {
  return (
    <DummyHStack>
      <RoundedButton active={true}>アクティブ</RoundedButton>
      <RoundedButton>インアクティブ</RoundedButton>
    </DummyHStack>
  );
};
export const All = AllTemplate.bind({});
All.parameters = {
  controls: { disabled: true },
  screenshot: screenshotOptions,
};
