import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { DummyBox } from "@/utils/storybook";

import Grid from "./index";

export default {
  title: "Layouts/Grid",
  component: Grid,
  argTypes: {
    cols: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
      defaultValue: 2,
    },
    colsTablet: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
      defaultValue: 4,
    },
    colsDesktop: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
      defaultValue: 4,
    },
    gap: {
      control: {
        type: "range",
        min: 0,
        step: 1,
      },
      defaultValue: 0,
    },
    gapY: {
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
    gapYTablet: {
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
    gapYDesktop: {
      control: {
        type: "range",
        min: 0,
        step: 1,
      },
      defaultValue: 0,
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = args => {
  return (
    <Grid {...args}>
      <DummyBox>1</DummyBox>
      <DummyBox>2</DummyBox>
      <DummyBox>3</DummyBox>
      <DummyBox>4</DummyBox>
      <DummyBox>5</DummyBox>
      <DummyBox>6</DummyBox>
      <DummyBox>7</DummyBox>
      <DummyBox>8</DummyBox>
      <DummyBox>9</DummyBox>
      <DummyBox>10</DummyBox>
      <DummyBox>11</DummyBox>
      <DummyBox>12</DummyBox>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  gap: 8,
  gapY: 8,
  gapTablet: 12,
  gapYTablet: 12,
  gapDesktop: 16,
  gapYDesktop: 16,
};
