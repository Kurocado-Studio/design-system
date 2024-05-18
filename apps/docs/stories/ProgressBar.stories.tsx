import type { Meta } from "@storybook/react";
import React from "react";
import { ProgressBar } from "@kurocado-studio/ui";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: any) => <ProgressBar {...args} />;

Example.args = {
  label: "Loading…",
  value: 80,
};
