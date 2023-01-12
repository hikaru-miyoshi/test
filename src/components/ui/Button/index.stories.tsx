import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./index";

type BindTemplate = <T extends ComponentStory<any>>(template: T, args: T["args"]) => T;

const bindTemplate: BindTemplate = (template, args) => {
  const boundTemplate = (template as any).bind({});
  boundTemplate.args = args;

  return boundTemplate;
};

const config: ComponentMeta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["default"], defaultValue: "default" },
  },
};

export default config;

export const Default = bindTemplate(args => <Button<"button"> as="a" href={"#"} {...args} />, {
  children: "公式サイト",
});
