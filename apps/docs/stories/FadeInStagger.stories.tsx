/* eslint import/no-default-export: 0 */
import {
  Grid,
  type StaggerContainerProps,
  Typography,
  useMotion,
} from '@kurocado-studio/ui/react';
import {
  StaggerContainerStories,
  type StaggerContainerStory,
} from '@kurocado-studio/ui/stories';
import React from 'react';

export default {
  ...StaggerContainerStories.meta,
  title: 'hooks/useMotion/createStaggerContainerProps',
};

export const withStaggerSpeed: StaggerContainerStory = {
  ...StaggerContainerStories.withStaggerSpeed,
  render: (args: StaggerContainerProps) => {
    // Ignore the Warning (Safe for Storybook) as the linter assumes render is a regular function, not a component
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { createStaggerContainerProps, createFadeProps } = useMotion();

    return (
      <Grid {...createStaggerContainerProps(args)}>
        {Array.from({ length: 12 }, (_, index) => {
          return (
            <Typography
              as='p'
              key={index}
              {...createFadeProps({ isInStaggerGroup: true })}
            >
              Element #{index}
            </Typography>
          );
        })}
      </Grid>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import {
  type StaggerContainerProps,
  Typography,
  useMotion,
  Grid,
} from '@kurocado-studio/ui/react';

import { FC } from 'react';

const ComponentExample: FC<StaggerContainerProps> = (props) => {
  const { createStaggerContainerProps, createFadeProps } = useMotion();
  
  return (
    <Grid {...createStaggerContainerProps(props)}>
      {Array.from({ length: 12 }, (_, index) => {
        return (
         <Typography
            as='p'
            key={index}
            {...createFadeProps({ isInStaggerGroup: true })}
          >
            Element #{index}
          </Typography>
        );
      })}
    </Grid>
  );
}
        `.trim(),
        language: 'tsx',
      },
    },
  },
};
