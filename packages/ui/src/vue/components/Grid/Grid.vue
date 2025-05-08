<template>
  <MotionElement :class="mergedClass" v-bind="modeledProps">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { PropertyPath, get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes, computed, defineProps } from 'vue';

import {
  type GridComponentLayoutOptions,
  composeAnimationProps,
  modelGridLayout,
} from 'src/lib';

const props = defineProps<GridProps>();

export interface GridProps extends GridComponentLayoutOptions {
  tag?: keyof HTMLElementTagNameMap;
  class?: HTMLAttributes['class'];
}

const MotionElement = get(motion, [props.tag] as PropertyPath);

const mergedClass = computed(() =>
  twMerge(modelGridLayout(props), props.class),
);

const modeledProps = computed(() => ({
  ...props,
  ...composeAnimationProps(props),
}));
</script>
