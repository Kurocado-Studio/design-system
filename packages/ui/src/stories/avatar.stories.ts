import { type MotionProps } from 'framer-motion';

import type { AvatarProps, Meta, StoryObj } from '../lib';

type AvatarStoryProps = AvatarProps &
  MotionProps & { src?: string; alt?: string };

export interface AvatarStoriesGroup {
  avatarMeta: Meta<AvatarStoryProps>;
  withSize: StoryObj<AvatarStoryProps>;
  withMotionProps: StoryObj<AvatarStoryProps>;
}

const sizeOptions: AvatarProps['size'][] = [
  'base',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

export const withMotionProps: StoryObj<AvatarStoryProps> = {
  name: 'With Motion Props',
  args: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  },
  tags: ['autodocs'],
};

export const withSize: StoryObj<AvatarStoryProps> = {
  name: 'With Size',
  args: {
    controlSize: 'lg',
  },
  tags: ['autodocs'],
};

export const AvatarStories: AvatarStoriesGroup = {
  avatarMeta: {
    title: 'Components/Avatar',
    argTypes: {
      controlSize: { control: 'select', options: sizeOptions },
      src: { control: 'text' },
      alt: { control: 'text' },
    },
    args: {
      src: 'https://avatars.githubusercontent.com/u/148841069?s=200&v=4',
      alt: 'Kurocado Studio',
    },
    tags: ['autodocs'],
  },
  withMotionProps,
  withSize,
};
