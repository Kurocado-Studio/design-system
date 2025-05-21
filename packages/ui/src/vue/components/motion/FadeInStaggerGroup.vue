<template>
  <AnimatePresence>
    <component :is="Component" v-bind="allProps">
      <slot />
    </component>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { get } from 'lodash-es';
import { AnimatePresence, motion } from 'motion-v';
import { computed, toRefs, useAttrs } from 'vue';

import {
  type MotionLayoutOptions,
  createStaggerContainerProps,
} from '../../../lib';

export type FadeInStaggerGroupProps<
  T extends keyof HTMLElementTagNameMap = 'div',
> = MotionLayoutOptions<T> & {
  tag?: T | typeof motion;
  as?: keyof HTMLElementTagNameMap;
  speed?: number;
};

const props = defineProps<FadeInStaggerGroupProps>();

const { speed, tag, as, ...rest } = toRefs(props);
const additionalAttributes = useAttrs();

const tagName = as?.value ?? 'div';
const Component = typeof tag?.value === 'object'
    ? tag.value
    : get(motion, [tagName], 'div');

const unwrappedRest = computed(() =>
    Object.fromEntries(Object.entries(rest).map(([key, ref]) => [key, ref.value]))
);

const allProps = computed(() => {
  return {
    ...unwrappedRest.value,
    ...additionalAttributes,
    ...createStaggerContainerProps({ staggerSpeed: speed.value }),
  };
});
</script>
