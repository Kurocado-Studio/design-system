import type { ArgTypes, AvatarProps, Meta, StoryObj } from '../lib';

export interface AvatarStoriesGroup {
  avatarMeta: Meta<AvatarProps>;
  withSize: StoryObj<AvatarProps>;
  withMotionProps: StoryObj<AvatarProps>;
}

const sizeOptions: AvatarProps['size'][] = [
  'base',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

const avatarBaseArgs: AvatarProps = {
  src: 'https://avatars.githubusercontent.com/u/148841069?s=200&v=4',
  alt: 'Kurocado Studio',
};

const avatarArgTypes: ArgTypes<AvatarProps> = {
  controlSize: { control: 'select', options: sizeOptions },
  src: { control: 'text' },
  alt: { control: 'text' },
};

export const withMotionProps: StoryObj<AvatarProps> = {
  name: 'With Motion Props',
  args: {
    initial: { opacity: 0 },
    // @ts-expect-error mismatch between types for `opacity`
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  },
  tags: ['autodocs'],
};

export const withSize: StoryObj<AvatarProps> = {
  name: 'With Size',
  args: {
    controlSize: 'lg',
  },
  tags: ['autodocs'],
};

export const AvatarStories: AvatarStoriesGroup = {
  avatarMeta: {
    title: 'Components/Avatar',
    argTypes: avatarArgTypes,
    args: avatarBaseArgs,
  },
  withMotionProps,
  withSize,
};
