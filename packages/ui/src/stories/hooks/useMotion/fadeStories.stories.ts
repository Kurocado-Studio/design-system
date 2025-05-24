import {
  FadeInDirection,
  type FadePropsOptions,
  type Meta,
  type StoryObj,
} from '../../../lib';

export type FadeStory = FadePropsOptions<'section'>;

export interface FadeStoriesGroup {
  meta: Meta<FadeStory>;
  withStaggerOrder: StoryObj<FadeStory>;
  withPlayground: StoryObj<FadeStory>;
}

export const withPlayground: FadeStoriesGroup['withPlayground'] = {
  name: 'Playground',
  args: {
    fadeInDirection: 'RIGHT_TO_LEFT',
    fadeInSpeed: 40,
    transitionDuration: 0.3,
    staggerOrder: 0,
    isInStaggerGroup: false,
    shouldReduceMotion: null,
  },
  tags: ['autodocs'],
};

export const withStaggerOrder: FadeStoriesGroup['withStaggerOrder'] = {
  name: 'With Stagger Order',
  args: {
    staggerOrder: 1,
  },
  tags: ['autodocs'],
};

export const FadeStories: FadeStoriesGroup = {
  meta: {
    argTypes: {
      fadeInDirection: {
        control: { type: 'select' },
        options: Object.values(FadeInDirection),
        description: 'Direction the element fades in from',
        table: {
          type: { summary: Object.values(FadeInDirection).toString() },
          defaultValue: { summary: 'DEFAULT' },
        },
      },
      fadeInSpeed: {
        control: { type: 'number', min: 0, step: 0.1 },
        description: 'Multiplier for how fast the fade animation runs',
        table: {
          type: { summary: 'number' },
          defaultValue: { summary: '1' },
        },
      },
      transitionDuration: {
        control: { type: 'number', min: 0, step: 0.1 },
        description: 'Explicit duration (in seconds) for the fade transition',
        table: {
          type: { summary: 'number' },
          defaultValue: { summary: '0.3' },
        },
      },
      staggerOrder: {
        control: { type: 'number', min: 0, step: 1 },
        description: 'Index of this item within a staggered group',
        table: {
          type: { summary: 'number' },
        },
      },
      isInStaggerGroup: {
        control: 'boolean',
        description: 'Whether this item participates in a stagger group',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
        },
      },
      shouldReduceMotion: {
        control: 'boolean',
        description:
          'Force-reduce motion even if user preference is `no-preference`',
        table: {
          type: { summary: 'boolean | null' },
          defaultValue: { summary: 'null' },
        },
      },
      as: {
        control: 'text',
        description: 'Which HTML tag (or component) to render as',
        table: {
          type: { summary: 'keyof HTMLElementTagNameMap' },
          defaultValue: { summary: 'div' },
        },
      },
      viewport: {
        control: 'object',
        description:
          'Options passed through to the intersection‐observer viewport trigger',
        table: {
          type: { summary: 'Record<string, unknown>' },
          defaultValue: { summary: '{}' },
        },
      },
    },
    args: {
      fadeInDirection: 'RIGHT_TO_LEFT',
    },
    tags: ['autodocs'],
  },
  withStaggerOrder,
  withPlayground,
};
