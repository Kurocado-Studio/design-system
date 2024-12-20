import { Button } from "@acme/ui/Button";
import { themes } from "@storybook/theming";

export default {
  title: "Design System/motion/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
    },
  },
  docs: {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light,
  },
  args: {
    disabled: false,
    children: "Button",
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
  },
};
