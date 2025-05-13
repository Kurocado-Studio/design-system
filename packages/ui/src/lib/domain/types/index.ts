export type * from './motion.library';
export type * from './storybook.library';

export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Sizes = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Theme = Record<string, Record<string, unknown>>;
