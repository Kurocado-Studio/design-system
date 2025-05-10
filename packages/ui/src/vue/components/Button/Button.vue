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
import { computed, useAttrs } from 'vue';

import {
  buttonStyles,
  composeAnimationProps,
  createA11yButtonProps,
  cursorStyles,
} from '../../../lib';
import { ButtonProps } from './types';

const buttonPropsAttributes = useAttrs() as ButtonProps;

const MotionElement = get(motion, ['button']);

const mergedClass = computed(() =>
  twMerge(
    buttonStyles(buttonPropsAttributes),
    cursorStyles(buttonPropsAttributes),
    buttonPropsAttributes.class,
  ),
);

const buttonProps = computed(() => ({
  ...createA11yButtonProps(buttonPropsAttributes),
  ...composeAnimationProps(buttonPropsAttributes),
}));
</script>
