import { type motion } from 'framer-motion';
import type React from 'react';

export type * from './common';
export type * from './motion.library';
export type * from '../components/Card/card';
export type * from '../components/Input/input';
export type * from './storybook.library';

export type Theme = Record<string, Record<string, unknown>>;

export type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export type PropsWithoutRef<T extends HTMLIntrinsicElements> =
  T extends keyof typeof motion
    ? Omit<React.ComponentPropsWithoutRef<(typeof motion)[T]>, 'ref'>
    : never;
