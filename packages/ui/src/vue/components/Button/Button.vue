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
import { HTMLAttributes, computed, useAttrs } from 'vue';

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
const { fullWidth } = useAttrs();

const MotionElement = get(motion, ['button']);

const mergedClass = computed(() =>
  twMerge(
    buttonStyles({ fullWidth, ...props }),
    cursorStyles(props),
    props.class,
  ),
);

const buttonProps = computed(() => ({
  ...createA11yButtonProps(props),
  ...composeAnimationProps(props),
}));
</script>
