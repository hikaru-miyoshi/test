import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import GoodCount from "./index";

export default {
  title: "Components/GoodCount",
  component: GoodCount,
  argTypes: {
    count: {
      control: {
        type: "range",
        max: 200,
        step: 1,
      },
      defaultValue: 123,
    },
  },
} as ComponentMeta<typeof GoodCount>;

const Template: ComponentStory<typeof GoodCount> = args => <GoodCount {...args} />;

export const Default = Template.bind({});
