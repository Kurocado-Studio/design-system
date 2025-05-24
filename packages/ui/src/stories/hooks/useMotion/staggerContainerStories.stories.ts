import {
  type Meta,
  type StaggerContainerProps,
  type StoryObj,
} from '../../../lib';

export type StaggerContainerStory = StoryObj<StaggerContainerProps>;

export interface StaggerContainerStoriesGroup {
  meta: Meta<StaggerContainerProps>;
  withStaggerSpeed: StaggerContainerStory;
}

export const withStaggerSpeed: StaggerContainerStory = {
  name: 'With Stagger Speed',
  args: {
    staggerSpeed: 0.4,
  },
  tags: ['autodocs'],
};

export const StaggerContainerStories: StaggerContainerStoriesGroup = {
  meta: {
    argTypes: {
      staggerSpeed: {
        control: { type: 'number', min: 0, max: 1, step: 0.05 },
        description: 'how fast the children fade in (seconds between each)',
        defaultValue: 0.1,
      },
    },
    args: {
      staggerSpeed: 0.1,
    },
    tags: ['autodocs'],
  },
  withStaggerSpeed,
};
