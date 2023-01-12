import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DummyBox, screenshotOptions } from "@/utils/storybook";

import Main from "../Main";
import Sidebar from "../Sidebar";
import Stack from "./index";

export default {
  title: "Layouts/Stack",
  component: Stack,
  subcomponents: { Main, Sidebar },
  argTypes: {
    gap: {
      control: {
        type: "range",
        min: 0,
        step: 1,
      },
      defaultValue: 0,
    },
    gapTablet: {
      control: {
        type: "range",
        min: 0,
        step: 1,
      },
      defaultValue: 0,
    },
    gapDesktop: {
      control: {
        type: "range",
        min: 0,
        step: 1,
      },
      defaultValue: 0,
    },
    direction: {
      control: {
        type: "select",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
    },
    wrap: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = args => {
  return (
    <Stack {...args}>
      <DummyBox>1</DummyBox>
      <DummyBox>2</DummyBox>
      <DummyBox>3</DummyBox>
      <DummyBox>4</DummyBox>
      <DummyBox>5</DummyBox>
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  gap: 8,
  gapTablet: 12,
  gapDesktop: 16,
};

const TwoColTemplate: ComponentStory<typeof Stack> = () => {
  return (
    <Stack direction="row" gap={50} gapTablet={40} wrap>
      <Main>
        <DummyBox>Main</DummyBox>
      </Main>
      <Sidebar>
        <DummyBox>Sidebar</DummyBox>
      </Sidebar>
    </Stack>
  );
};
export const MainSidebar = TwoColTemplate.bind({});
MainSidebar.storyName = "Main + Sidebar";
MainSidebar.parameters = {
  controls: { disabled: true },
  screenshot: screenshotOptions,
};
