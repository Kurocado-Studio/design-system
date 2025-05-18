import type {
  HTMLMotionProps as ReactMotionHTMLAttributes,
  MotionProps as ReactMotionProps,
} from 'framer-motion';
import type {
  MotionHTMLAttributes as VueMotionHTMLAttributes,
  MotionProps as VueMotionProps,
} from 'motion-v';
import { type JSX } from 'react';
import type { JSX as VueJSX } from 'vue/jsx-runtime';

export type { VueMotionHTMLAttributes };
export type { ReactMotionHTMLAttributes };

export type Framework = 'react' | 'vue';

export type MotionComponent<F extends Framework> = F extends 'react'
  ? ReactMotionProps
  : VueMotionProps;

export type MotionElementPropsMap = {
  react: ReactMotionProps;
  vue: VueMotionProps;
};

export type VueMotionElementProps = MotionElementPropsMap['vue'];
export type ReactMotionElementProps = MotionElementPropsMap['react'];

export type MotionIntrinsicProps<
  K extends string,
  F extends Framework,
> = F extends 'react'
  ? K extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[K]
    : never
  : F extends 'vue'
    ? K extends keyof VueJSX.IntrinsicElements
      ? VueJSX.IntrinsicElements[K]
      : never
    : never;
