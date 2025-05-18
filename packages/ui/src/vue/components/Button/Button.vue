<template>
  <MotionElement as="button" :class="mergedClass" v-bind="buttonProps">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from '@vue/runtime-dom';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import {
  type A11yButtonProps,
  VueMotionElementProps,
  buttonStyles,
  composeAnimationProps,
  createA11yButtonProps,
  cursorStyles,
} from '../../../lib';

const MotionElement = motion.button;

export type ButtonProps = A11yButtonProps &
  VueMotionElementProps &
  /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'style'> & {
    fullWidth?: boolean;
    class?: string;
    type?: 'button' | 'submit' | 'reset';
  };

const props = defineProps<ButtonProps>();

const mergedClass = computed(() =>
  twMerge(buttonStyles(props), cursorStyles(props), props.class),
);

const buttonProps = computed(() => ({
  ...createA11yButtonProps(props as A11yButtonProps),
  ...composeAnimationProps(props),
}));
</script>
