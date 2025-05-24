/* eslint import/no-default-export: 0 */
import {
  type FadePropsOptions,
  Grid,
  Typography,
  useMotion,
} from '@kurocado-studio/ui/react';
import { FadeStories } from '@kurocado-studio/ui/stories';
import type { StoryObj } from '@storybook/react';
import React from 'react';

type Story = StoryObj<FadePropsOptions>;

export default {
  ...FadeStories.meta,
  title: 'hooks/useMotion/createFadeProps',
};

export const withStaggerOrder: Story = {
  ...FadeStories.withStaggerOrder,
  render: (args: FadePropsOptions) => {
    // Ignore the Warning (Safe for Storybook) as the linter assumes render is a regular function, not a component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { createStaggerContainerProps, createFadeProps } = useMotion();

    return (
      <Grid {...createStaggerContainerProps()}>
        <Typography {...createFadeProps({ staggerOrder: 0 })}>
          Not being edited
        </Typography>
        <Typography {...createFadeProps(args)}>Being edited by you</Typography>
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const { createStaggerContainerProps, createFadeProps } = useMotion();

return (
  <Grid {...createStaggerContainerProps()}>
    <Typography {...createFadeProps({ staggerOrder: 0 })}>
      Not being edited
    </Typography>
    <Typography {...createFadeProps(args)}>Being edited by you</Typography>
  </Grid>
);
        `.trim(),
        language: 'tsx',
      },
    },
  },
};

export const withPlayground: Story = {
  ...FadeStories.withPlayground,
  render: (args: FadePropsOptions) => {
    // Ignore the Warning (Safe for Storybook) as the linter assumes render is a regular function, not a component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { createFadeProps } = useMotion();
    return <Typography {...createFadeProps(args)}>Stand Alone</Typography>;
  },
  parameters: {
    docs: {
      source: {
        code: `
import {
  type FadePropsOptions,
  Typography,
  useMotion,
} from '@kurocado-studio/ui/react';

import { PropsWithChildren, FC } from 'react';

const ComponentExample: FC<PropsWithChildren<FadePropsOptions>> = ({ children, ...props }) => {
  const { createFadeProps } = useMotion();
  
  return <Typography {...createFadeProps(props)}>{children}</Typography>;
}
        `.trim(),
        language: 'tsx',
      },
    },
  },
};
