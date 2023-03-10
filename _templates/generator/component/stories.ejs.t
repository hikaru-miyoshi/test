---
to: "<%= useStorybook ? `src/components/${type}/${h.changeCase.pascalCase(name)}/index.stories.tsx` : null %>"
---

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import <%= h.changeCase.pascalCase(name) %> from "./index";

export default {
  title: "<%= h.changeCase.pascalCase(type) %>/<%= h.changeCase.pascalCase(name) %>",
  component: <%= h.changeCase.pascalCase(name) %>,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = args => <<%= h.changeCase.pascalCase(name) %> {...args}>{args.children}</<%= h.changeCase.pascalCase(name) %>>;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};
