import { Checkbox } from "@kurocado-studio/ui";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isDisabled: false,
    children: "Checkbox",
  },
};

export const Default = {
  args: {},
};
