import type { Meta } from "@storybook/react";
import React from "react";
import { DialogTrigger } from "react-aria-components";
import { AlertDialog } from "@acme/ui/AlertDialog";
import { Button } from "@acme/ui/Button";
import { Modal } from "@acme/ui/Modal";

const meta: Meta<typeof AlertDialog> = {
  title: "Design System/motion/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: any) => (
  <DialogTrigger>
    <Button variant="secondary">Delete…</Button>
    <Modal>
      <AlertDialog {...args} />
    </Modal>
  </DialogTrigger>
);

Example.args = {
  title: "Delete folder",
  children:
    'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
  variant: "destructive",
  actionLabel: "Delete",
};
