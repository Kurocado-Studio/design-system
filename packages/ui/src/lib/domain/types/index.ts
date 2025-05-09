import { type motion } from 'framer-motion';
import type React from 'react';

export type * from './motion.library';
export type * from './storybook.library';

export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ResponsiveMap<V> = Record<Breakpoint, V>;

export type Theme = Record<string, Record<string, unknown>>;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type PropsWithoutRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithoutRef<(typeof motion)[T]>, 'ref'>
    : never;
