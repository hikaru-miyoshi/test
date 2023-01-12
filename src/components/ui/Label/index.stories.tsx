import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DummyHStack, screenshotOptions } from "@/utils/storybook";

import Label from "./index";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "red", "blue", "yellow", "emerald", "purple", "orange", "ghost", "lightGhost"],
      defaultValue: "default",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args}>{args.children}</Label>;

export const Basic = Template.bind({});
Basic.args = {
  children: "ラベル",
};

const allProps = [
  {
    name: "デフォルト",
  },
  {
    name: "赤",
    variant: "red",
  },
  {
    name: "青",
    variant: "blue",
  },
  {
    name: "黄",
    variant: "yellow",
  },
  {
    name: "エメラルド",
    variant: "emerald",
  },
  {
    name: "紫",
    variant: "purple",
  },
  {
    name: "オレンジ",
    variant: "orange",
  },
  {
    name: "ゴースト",
    variant: "ghost",
  },
  {
    name: "明るいゴースト",
    variant: "lightGhost",
  },
];
const AllLabel: ComponentStory<typeof Label> = () => {
  return (
    <>
      <DummyHStack>
        {allProps.map((data: any) => {
          return (
            <Label key={`small-${data.name}`} variant={data?.variant} size="small">
              {data.name}
            </Label>
          );
        })}
      </DummyHStack>
      <DummyHStack style={{ marginTop: "1em" }}>
        {allProps.map((data: any) => {
          return (
            <Label key={`small-${data.name}`} variant={data?.variant}>
              {data.name}
            </Label>
          );
        })}
      </DummyHStack>
      <DummyHStack style={{ marginTop: "1em" }}>
        {allProps.map((data: any) => {
          return (
            <Label key={`small-${data.name}`} variant={data?.variant} size="large">
              {data.name}
            </Label>
          );
        })}
      </DummyHStack>
    </>
  );
};
export const All = AllLabel.bind({});
All.parameters = {
  controls: { disabled: true },
  screenshot: screenshotOptions,
};
