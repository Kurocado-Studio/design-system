<template>
  <MotionElement
    :class="mergedClass"
    v-bind="buttonProps as Record<string, unknown>"
  >
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes, computed } from 'vue';

import {
  type A11yButtonProps,
  buttonStyles,
  composeAnimationProps,
  createA11yButtonProps,
  cursorStyles,
} from '../../../lib';

export type ButtonProps = A11yButtonProps & {
  class?: HTMLAttributes['class'];
};

const props = defineProps<ButtonProps>();

const MotionElement = get(motion, ['button']);
console.log({ props });
const mergedClass = computed(() =>
  twMerge(buttonStyles(props), cursorStyles(props), props.class),
);

const buttonProps = computed(() => ({
  ...createA11yButtonProps(props),
  ...composeAnimationProps(props),
}));
</script>
