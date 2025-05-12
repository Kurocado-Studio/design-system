<template>
  <MotionElement
    :class="mergedClass"
    v-bind="composedButtonProps as Record<string, unknown>"
  >
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed } from 'vue';

import {
  buttonStyles,
  composeAnimationProps,
  createA11yButtonProps,
  cursorStyles,
} from '../../../lib';
import { ButtonProps } from './types';

const props = defineProps<ButtonProps>();

const MotionElement = get(motion, ['button']);

const mergedClass = computed(() =>
  twMerge(buttonStyles(props), cursorStyles(props), props.class),
);

const composedButtonProps = computed(() => ({
  ...createA11yButtonProps(props),
  ...composeAnimationProps(props),
}));
</script>
