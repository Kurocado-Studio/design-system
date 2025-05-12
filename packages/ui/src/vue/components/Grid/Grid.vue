<template>
  <MotionElement :class="mergedClass" v-bind="modeledProps">
    <slot />
  </MotionElement>
</template>

<script lang="ts" setup>
import { PropertyPath, get } from 'lodash-es';
import { motion } from 'motion-v';
import { twMerge } from 'tailwind-merge';
import { computed, toRefs } from 'vue';

import { composeAnimationProps, modelGridLayout } from '../../../lib';
import { GridProps } from './types';

const props = defineProps<GridProps>();

const gfgf = toRefs(props);

console.log('defineProps<GridProps>', { props });
const MotionElement = get(motion, [props.tag] as PropertyPath);

const mergedClass = computed(() =>
  twMerge(modelGridLayout(props), props.class),
);

const modeledProps = computed(() => ({
  ...props,
  ...composeAnimationProps(props),
}));
</script>
