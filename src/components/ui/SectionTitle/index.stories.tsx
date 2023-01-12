import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { screenshotOptions } from "@/utils/storybook";

import SectionTitle from "./index";

// TODO: アイコンのコンポーネント作成後、アイコンありのストーリーを作る
export default {
  title: "Components/SectionTitle",
  component: SectionTitle,
  argTypes: {
    children: { control: "text", defaultValue: "ピックアップ" },
  },
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = args => <SectionTitle {...args}>{args.children}</SectionTitle>;

export const Basic = Template.bind({});
Basic.parameters = {
  screenshot: screenshotOptions,
};
